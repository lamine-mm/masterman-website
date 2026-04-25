// Vercel Serverless Function — receives podcast / speaking request submissions
// from /media. Sends email via Resend when RESEND_API_KEY is configured;
// otherwise logs the payload so submissions are recoverable from Vercel logs.

const REQUIRED = ['requestType', 'name', 'email', 'showName', 'audienceSize', 'topic', 'format'];
const NOTIFY_TO = process.env.PODCAST_NOTIFY_TO || 'abdullah@mastermangroup.com';
const FROM = process.env.PODCAST_FROM || 'Masterman <noreply@mastermangroup.com>';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const missing = REQUIRED.filter((k) => !body[k] || String(body[k]).trim() === '');
  if (missing.length) {
    return res.status(400).json({ error: `Missing fields: ${missing.join(', ')}` });
  }

  if (!isEmail(body.email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (!body.agreed) {
    return res.status(400).json({ error: 'Conditions must be accepted' });
  }

  const submission = {
    requestType: clean(body.requestType, 20),
    name: clean(body.name, 200),
    email: clean(body.email, 200),
    phone: clean(body.phone, 60),
    showName: clean(body.showName, 200),
    audienceSize: clean(body.audienceSize, 60),
    topic: clean(body.topic, 4000),
    format: clean(body.format, 40),
    dateRange: clean(body.dateRange, 200),
    notes: clean(body.notes, 4000),
    agreedToConditions: Boolean(body.agreed),
    submittedAt: new Date().toISOString(),
    sourceIp: req.headers['x-forwarded-for'] || null,
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: FROM,
          to: [NOTIFY_TO],
          reply_to: submission.email,
          subject: `${submission.requestType === 'speaking' ? 'Speaking' : 'Podcast'} request — ${submission.showName}`,
          html: renderHtml(submission),
        }),
      });
      if (!r.ok) {
        const detail = await r.text();
        console.error('[podcast-request] resend error', r.status, detail);
        return res.status(502).json({ error: 'Email delivery failed' });
      }
    } catch (err) {
      console.error('[podcast-request] resend exception', err);
      return res.status(502).json({ error: 'Email delivery failed' });
    }
  } else {
    console.log('[podcast-request] (no RESEND_API_KEY) submission:', JSON.stringify(submission));
  }

  return res.status(200).json({ ok: true });
}

function clean(value, max) {
  if (value == null) return '';
  return String(value).slice(0, max).trim();
}

function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s));
}

function renderHtml(s) {
  const row = (label, value) =>
    `<tr><td style="padding:8px 12px;color:#888;">${label}</td><td style="padding:8px 12px;">${escapeHtml(value || '—')}</td></tr>`;
  return `
    <div style="font-family:system-ui,sans-serif;max-width:640px;">
      <h2 style="margin:0 0 16px;">New ${s.requestType === 'speaking' ? 'speaking' : 'podcast'} request</h2>
      <table style="border-collapse:collapse;width:100%;">
        ${row('Type', s.requestType)}
        ${row('From', `${s.name} <${s.email}>`)}
        ${row('Phone', s.phone)}
        ${row(s.requestType === 'speaking' ? 'Event' : 'Show', s.showName)}
        ${row('Audience', s.audienceSize)}
        ${row('Format', s.format)}
        ${row('Preferred dates', s.dateRange)}
        ${row('Topic', s.topic)}
        ${row('Notes', s.notes)}
        ${row('Conditions accepted', s.agreedToConditions ? 'Yes' : 'No')}
        ${row('Submitted', s.submittedAt)}
      </table>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
