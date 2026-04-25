// PageSections.jsx — About / Programs / Retreats bodies.
// Each exported component plugs into a page's <App> between MMNav and MMFooter.
// Reuses .section / .wrap / .eyebrow / .btn classes from site.css.

/* ============================================================
   ABOUT
   ============================================================ */
const About = () => (
  <>
    <section className="section section--tight" id="about-hero" style={{paddingTop: '160px'}}>
      <div className="wrap">
        <div className="problem__head">
          <span className="eyebrow">About Masterman</span>
          <h1 className="problem__h2">We exist because the<br/>problem is real.</h1>
          <div className="problem__intro">
            <p>Masterman was built by Muslim men who lived the contradiction: outwardly successful, inwardly disconnected. We couldn't find what we needed, so we built it.</p>
            <p>Our approach is grounded in Islamic principles — not psychology, not Western frameworks, though we draw on what's useful. The anchor is always the same: your identity as a Muslim man, a servant of Allah, is not contingent on any of your circumstances.</p>
            <p>When that foundation is solid, everything else — marriage, fatherhood, career, brotherhood — gets better. Not because you changed what you do, but because you changed who you are.</p>
          </div>
        </div>

        <div className="about__mission">
          <div className="about__mission-label">Our mission</div>
          <p className="about__mission-body">
            To help Muslim men establish an identity rooted in Islam so they can lead themselves, their families, and their communities with clarity and strength.
          </p>
        </div>
      </div>
    </section>

    <section className="section" id="founder">
      <div className="wrap">
        <span className="eyebrow">Founder</span>
        <div className="founder">
          <div className="founder__portrait" style={{backgroundImage: 'url(assets/photos/avatar-1.jpg)'}} />
          <div className="founder__body">
            <h2 className="founder__name">Sheikh Abdullah Oduro</h2>
            <div className="founder__role">Founder &amp; Lead Coach</div>
            <p>Abdullah helps Muslim men move from passive intention to structured action. His coaching combines faith-rooted identity work, practical accountability, and brotherhood.</p>
            <p>He is known for direct guidance, high standards, and building environments where men can do real work — on themselves, for their families, and for their communities.</p>
            <a href="https://programs.mastermangroup.com/summer-retreat-2026" target="_blank" rel="noopener" className="btn btn--primary">Join the Retreat<span className="btn__arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>
  </>
);

/* ============================================================
   PROGRAMS PAGE — header + reuse of the shared Programs block
   ============================================================ */
const ProgramsPage = () => (
  <div style={{paddingTop: '120px'}}>
    {React.createElement(window.MMPrograms)}
  </div>
);

/* ============================================================
   RETREATS PAGE
   ============================================================ */
const RETREAT_TIMELINE = [
  { title: 'Pre-Ramadan Retreat 2025', when: 'Feb 2025 · Q1 2025', location: 'Broken Bow', status: 'Completed', img: 'assets/photos/splash/brokenbow2025.jpg' },
  { title: 'Utah–Idaho Retreat',        when: 'Jun 2025 · Q2 2025', location: 'Utah / Idaho', status: 'Completed', img: 'assets/photos/splash/retreat-2025-utah.jpg' },
  { title: 'MasterMan Umrah Retreat',   when: 'Dec 2025 · Q4 2025', location: 'Makkah / Madinah', status: 'Completed', img: 'assets/photos/splash/umrah2025.jpg' },
  { title: 'Pre-Ramadan Retreat 2026',  when: 'Feb 2026 · Q1 2026', location: 'Broken Bow', status: 'Completed', img: 'assets/photos/splash/brokenbow2026.jpg' },
  { title: 'Smoky Mountains Retreat',   when: 'Jun 2026 · Q2 2026', location: 'Smoky Mountains, Tennessee', status: 'Upcoming', img: null },
  { title: 'To Be Defined',             when: 'Sep 2026 · Q3 2026', location: 'To Be Defined (TBD)', status: 'Upcoming', img: null },
  { title: 'MasterMan Umrah Retreat',   when: 'Q4 2026', location: 'Madinah / Makkah', status: 'Upcoming', img: null },
];

const RetreatsPage = () => (
  <>
    <section className="section section--tight" style={{paddingTop: '160px'}}>
      <div className="wrap">
        <span className="eyebrow">Masterman Retreats</span>
        <h1 className="problem__h2">Reset. Rebuild.<br/>Return stronger.</h1>
        <div className="problem__intro" style={{maxWidth: '620px'}}>
          <p>Masterman Retreats are designed for Muslim men who need more than online motivation. This is deep, structured immersion: real brotherhood, practical discipline, and a clear plan you can execute after you go home.</p>
          <p style={{fontStyle: 'normal', fontFamily: 'var(--font-text)', fontSize: '17px', color: 'var(--parchment-300)'}}>Every retreat combines spiritual grounding, high-accountability sessions, physical challenge, and focused strategy work.</p>
        </div>
      </div>
    </section>

    <section className="section retreat" id="gallery" style={{paddingTop: '40px'}}>
      <div className="wrap">
        <div className="gallery__grid" style={{gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto'}}>
          <div className="gallery__cell" style={{backgroundImage: 'url(assets/photos/splash/brokenbow2025.jpg)', minHeight: '260px'}} />
          <div className="gallery__cell" style={{backgroundImage: 'url(assets/photos/splash/retreat-2025-utah.jpg)', minHeight: '260px'}} />
          <div className="gallery__cell" style={{backgroundImage: 'url(assets/photos/splash/brokenbow2026.jpg)', minHeight: '260px'}} />
        </div>
      </div>
    </section>

    <section className="section" id="timeline" style={{paddingTop: '40px'}}>
      <div className="wrap">
        <span className="eyebrow">Retreat Timeline</span>
        <h2 className="problem__h2" style={{marginBottom: '48px'}}>Past and upcoming retreats</h2>
        <div className="retreat-timeline">
          {RETREAT_TIMELINE.map((r, i) => (
            <div key={i} className={`retreat-item retreat-item--${r.status.toLowerCase()}`}>
              <div className="retreat-item__body">
                <h3 className="retreat-item__title">{r.title}</h3>
                <div className="retreat-item__meta">{r.when}</div>
                <div className="retreat-item__meta">Location: {r.location}</div>
                <div className={`retreat-item__status retreat-item__status--${r.status.toLowerCase()}`}>{r.status}</div>
              </div>
              <div className="retreat-item__img"
                style={r.img ? {backgroundImage: `url(${r.img})`} : {}}>
                {!r.img && <span className="retreat-item__tbd">TBD</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

/* ============================================================
   MEDIA PAGE — past appearances + custom podcast request form
   ============================================================ */
const PODCAST_PAST_APPEARANCES = [
  {
    title: 'Working Out, Approaching Muslim Women & Converting to Islam',
    show: 'The Ansari Podcast · E78',
    embed: 'https://www.youtube.com/embed/hODL4TvYrWg?rel=0&start=2389',
  },
  {
    title: 'A Book About Government Secrets Led Me To Islam',
    show: '1st Pillar',
    embed: 'https://www.youtube.com/embed/TJfBFJQGI5I?rel=0',
  },
];

const AUDIENCE_OPTIONS = ['Under 1,000', '1K – 10K', '10K – 100K', '100K +'];
const FORMAT_OPTIONS = [
  { value: 'audio', label: 'Audio' },
  { value: 'video', label: 'Video' },
  { value: 'live',  label: 'Live event' },
];

const PodcastRequestForm = () => {
  const [form, setForm] = React.useState({
    requestType: 'podcast',
    name: '', email: '', phone: '', showName: '',
    audienceSize: AUDIENCE_OPTIONS[0], topic: '',
    format: 'audio', agreed: false,
    dateRange: '', notes: '',
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.agreed) {
      setResult({ error: 'Please confirm the conditions to continue.' });
      return;
    }
    setSubmitting(true);
    setResult(null);
    try {
      const r = await fetch('/api/podcast-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await r.json().catch(() => ({}));
      if (r.ok) setResult({ ok: true });
      else setResult({ error: data.error || `Error (${r.status})` });
    } catch (err) {
      setResult({ error: 'Network error — please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (result && result.ok) {
    return (
      <div className="podcast-form podcast-form--success">
        <h3 className="podcast-form__success-title">Request received.</h3>
        <p className="podcast-form__success-body">We'll review and respond within 5 business days. Jazak Allah khayr.</p>
      </div>
    );
  }

  return (
    <form className="podcast-form" onSubmit={onSubmit} noValidate>
      <fieldset className="podcast-form__field podcast-form__radio podcast-form__type">
        <legend>Request type *</legend>
        <div className="podcast-form__radio-group">
          {[
            { value: 'podcast',  label: 'Podcast appearance' },
            { value: 'speaking', label: 'Speaking engagement' },
          ].map((t) => (
            <label key={t.value} className="podcast-form__radio-opt podcast-form__radio-opt--card">
              <input type="radio" name="requestType" value={t.value}
                checked={form.requestType === t.value}
                onChange={(e) => update('requestType', e.target.value)} />
              <span>{t.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="podcast-form__row">
        <label className="podcast-form__field">
          <span>Your name *</span>
          <input type="text" required maxLength="200"
            value={form.name} onChange={(e) => update('name', e.target.value)} />
        </label>
        <label className="podcast-form__field">
          <span>Email *</span>
          <input type="email" required maxLength="200"
            value={form.email} onChange={(e) => update('email', e.target.value)} />
        </label>
      </div>

      <div className="podcast-form__row">
        <label className="podcast-form__field">
          <span>{form.requestType === 'speaking' ? 'Event / Organization name *' : 'Show / Podcast name *'}</span>
          <input type="text" required maxLength="200"
            value={form.showName} onChange={(e) => update('showName', e.target.value)} />
        </label>
        <label className="podcast-form__field">
          <span>Audience size *</span>
          <select required value={form.audienceSize}
            onChange={(e) => update('audienceSize', e.target.value)}>
            {AUDIENCE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
      </div>

      <label className="podcast-form__field">
        <span>What you'd like Sheikh Abdullah to discuss *</span>
        <textarea rows="4" required maxLength="4000"
          value={form.topic} onChange={(e) => update('topic', e.target.value)} />
      </label>

      <div className="podcast-form__row">
        <fieldset className="podcast-form__field podcast-form__radio">
          <legend>Format *</legend>
          <div className="podcast-form__radio-group">
            {FORMAT_OPTIONS.map((f) => (
              <label key={f.value} className="podcast-form__radio-opt">
                <input type="radio" name="format" value={f.value}
                  checked={form.format === f.value}
                  onChange={(e) => update('format', e.target.value)} />
                <span>{f.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="podcast-form__field">
          <span>Phone (optional)</span>
          <input type="tel" maxLength="60"
            value={form.phone} onChange={(e) => update('phone', e.target.value)} />
        </label>
      </div>

      <label className="podcast-form__field">
        <span>Preferred date range</span>
        <input type="text" placeholder="e.g. May–June 2026" maxLength="200"
          value={form.dateRange} onChange={(e) => update('dateRange', e.target.value)} />
      </label>

      <label className="podcast-form__field">
        <span>Anything else?</span>
        <textarea rows="3" maxLength="4000"
          value={form.notes} onChange={(e) => update('notes', e.target.value)} />
      </label>

      <div className="podcast-form__conditions">
        <label className="podcast-form__check">
          <input type="checkbox" required
            checked={form.agreed}
            onChange={(e) => update('agreed', e.target.checked)} />
          <span>I agree to the conditions below.</span>
        </label>
        <ul className="podcast-form__conditions-list">
          <li>I will share the raw footage of the recording with the Masterman team after completion.</li>
          <li>I grant Masterman permission to use clips from the footage on its social media accounts.</li>
          <li>Masterman has final approval of all pre- and post-interview promotional materials.</li>
        </ul>
      </div>

      {result && result.error && (
        <div className="podcast-form__error" role="alert">{result.error}</div>
      )}

      <button type="submit" className="btn btn--primary podcast-form__submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Request'}
        <span className="btn__arrow">→</span>
      </button>
    </form>
  );
};

const MediaPage = () => (
  <>
    <section className="section section--tight" style={{paddingTop: '160px', paddingBottom: '24px'}}>
      <div className="wrap">
        <div className="problem__head" style={{marginBottom: 0}}>
          <span className="eyebrow">Media</span>
          <h1 className="problem__h2">Have Sheikh Abdullah<br/>on your show.</h1>
          <div className="problem__intro">
            <p>Sheikh Abdullah Oduro speaks on Muslim identity, brotherhood, marriage, and the inner work of becoming an unshakeable man. If you run a podcast, conference, or community gathering and would like him on, send a request below. We respond within 5 business days.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="podcast-request" style={{paddingTop: '8px', paddingBottom: '64px'}}>
      <div className="wrap">
        <PodcastRequestForm />
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Past appearances</span>
        <h2 className="problem__h2" style={{marginBottom: '32px'}}>A few recent talks.</h2>
        <div className="media-appearances">
          {PODCAST_PAST_APPEARANCES.map((a, i) => (
            <div key={i} className="media-appearance">
              <div className="media-appearance__embed">
                <iframe src={a.embed} title={a.title} loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              </div>
              <div className="media-appearance__meta">
                <h3 className="media-appearance__title">{a.title}</h3>
                <p className="media-appearance__show">{a.show}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

Object.assign(window, {
  MMAbout: About,
  MMProgramsPage: ProgramsPage,
  MMRetreatsPage: RetreatsPage,
  MMMediaPage: MediaPage,
});
