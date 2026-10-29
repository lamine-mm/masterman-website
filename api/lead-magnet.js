// Vercel Serverless Function — captures lead-magnet email signups and adds
// them to a ConvertKit sequence. The sequence's first email delivers the
// resource (e.g. the 40 Hadith on Manhood PDF).
//
// Required env vars:
//   CONVERTKIT_API_KEY      — your ConvertKit v3 API key
//   CONVERTKIT_SEQUENCE_ID  — the numeric ID of the sequence to subscribe to
//
// Optional per-resource sequences (fall back to CONVERTKIT_SEQUENCE_ID when unset):
//   CONVERTKIT_SEQUENCE_ID_NIGERIA — /nigeria signups (PDF + Inner Circle follow-up)
//
// Without CONVERTKIT_API_KEY the function logs the submission so signups
// captured during setup aren't lost.

const API_BASE = 'https://api.convertkit.com/v3';

// resource value sent by the page → env var holding its own sequence ID
const RESOURCE_SEQUENCE_ENV = {
  'nigeria-talk-2026': 'CONVERTKIT_SEQUENCE_ID_NIGERIA',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const email = String(body.email || '').trim().slice(0, 200);
  const firstName = String(body.firstName || '').trim().slice(0, 80);
  const resource = String(body.resource || 'unspecified').trim().slice(0, 80);

  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const submission = {
    email,
    firstName,
    resource,
    submittedAt: new Date().toISOString(),
    sourceIp: req.headers['x-forwarded-for'] || null,
  };

  const apiKey = process.env.CONVERTKIT_API_KEY;
  const sequenceId =
    process.env[RESOURCE_SEQUENCE_ENV[resource]] || process.env.CONVERTKIT_SEQUENCE_ID;

  if (!apiKey || !sequenceId) {
    console.log('[lead-magnet] (ConvertKit not configured) submission:', JSON.stringify(submission));
    return res.status(200).json({ ok: true });
  }

  try {
    const r = await fetch(`${API_BASE}/sequences/${sequenceId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        email,
        first_name: firstName || undefined,
        fields: { resource },
      }),
    });
    if (!r.ok) {
      const detail = await r.text();
      console.error('[lead-magnet] ConvertKit error', r.status, detail);
      return res.status(502).json({ error: 'Subscription failed' });
    }
  } catch (err) {
    console.error('[lead-magnet] ConvertKit exception', err);
    return res.status(502).json({ error: 'Subscription failed' });
  }

  return res.status(200).json({ ok: true });
}

function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s));
}
