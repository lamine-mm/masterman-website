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
            <a href="#apply" className="btn btn--primary">Take Free Assessment<span className="btn__arrow">→</span></a>
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
  <>
    <section className="section section--tight" style={{paddingTop: '160px'}}>
      <div className="wrap">
        <span className="eyebrow">Our Programs</span>
        <h1 className="problem__h2">Built for where<br/>you are on the journey.</h1>
        <p className="programs__sub" style={{marginTop: '24px', maxWidth: '620px'}}>
          Whether you're just recognizing the gap or you're ready for deep, structured work, our programs meet you where you are and move you toward a grounded Islamic identity.
        </p>
      </div>
    </section>
    {React.createElement(window.MMPrograms)}
  </>
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

Object.assign(window, {
  MMAbout: About,
  MMProgramsPage: ProgramsPage,
  MMRetreatsPage: RetreatsPage,
});
