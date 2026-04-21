// Sections.jsx — all homepage sections, split by section for legibility.
// Exposes window.MMSections = { Nav, Hero, Problem, Method, Programs, Retreat, YouTube, Testimonials, FinalCTA, Footer }

/* ============================================================
   Images — real Masterman retreat/brotherhood photography.
   Desaturated at the CSS layer (grayscale filter), so the raw
   images stay full color and can be reused wherever.
   ============================================================ */
const IMG = {
  heroA:    'assets/photos/hero.jpg',
  heroB:    'assets/photos/hero.jpg',
  heroC:    'assets/photos/hero.jpg',
  retreat:  'assets/photos/retreat-feature.jpg',
  finalcta: 'assets/photos/finalcta.jpg',
  g1: 'assets/photos/gallery-1.jpg',
  g2: 'assets/photos/gallery-2.jpg',
  g3: 'assets/photos/gallery-3.jpg',
  g4: 'assets/photos/gallery-4.jpg',
  g5: 'assets/photos/gallery-5.jpg',
  yt1: 'assets/photos/yt-1.jpg',
  yt2: 'assets/photos/yt-2.jpg',
  tv1: 'assets/photos/tv-1.jpg',
  tv2: 'assets/photos/tv-2.jpg',
  tv3: 'assets/photos/tv-3.jpg',
  av1: 'assets/photos/avatar-1.jpg',
  av2: 'assets/photos/avatar-2.jpg',
};

/* ============================================================
   SPLASH — full-screen intro. 12-tile retreat grid, gold mark
   pulses at center, curtain splits open after ~1.8s.
   Shown once per session.
   ============================================================ */
const SPLASH_TILES = [
  'assets/photos/splash/brokenbow2025.jpg',
  'assets/photos/splash/dsc01230.jpg',
  'assets/photos/splash/retreat-2025-utah.jpg',
  'assets/photos/splash/umrah2025.jpg',
  'assets/photos/splash/dsc00285.jpg',
  'assets/photos/splash/retreatim.jpg',
  'assets/photos/splash/brokenbow2026.jpg',
  'assets/photos/splash/dsc01977.jpg',
  'assets/photos/splash/dsc01005.jpg',
  'assets/photos/splash/img_3307.jpg',
  'assets/photos/splash/dsc00058.jpg',
  'assets/photos/splash/shk.jpg',
];

const Splash = () => {
  const [phase, setPhase] = React.useState('showing');

  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    const tOpen = setTimeout(() => setPhase('opening'), 2400);
    const tGone = setTimeout(() => {
      setPhase('gone');
      document.documentElement.style.overflow = '';
    }, 3300);
    return () => {
      clearTimeout(tOpen);
      clearTimeout(tGone);
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (phase === 'gone') return null;
  return (
    <div className={`splash splash--${phase}`} aria-hidden="true">
      <div className="splash__grid">
        {SPLASH_TILES.map((src, i) => (
          <div key={i}
            className="splash__tile"
            style={{backgroundImage: `url(${src})`, animationDelay: `${i * 80}ms`}} />
        ))}
      </div>
      <div className="splash__curtain splash__curtain--top" />
      <div className="splash__curtain splash__curtain--bottom" />
      <div className="splash__center">
        <img src="assets/logo-mark.png" alt="" className="splash__mark" />
        <div className="splash__word">Masterman</div>
        <div className="splash__tag">For the Muslim man ready to do the real work.</div>
      </div>
    </div>
  );
};

/* ============================================================
   NAV
   ============================================================ */
const Nav = ({ logoPath = 'assets/logo-mark.png' }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="index.html" className="nav__brand">
          <img src={logoPath} alt="" />
          <span className="nav__brand-word">Masterman</span>
        </a>
        <div className="nav__links">
          <a href="programs.html" className="nav__link">Programs</a>
          <a href="about.html" className="nav__link">About</a>
          <a href="retreats.html" className="nav__link">Retreats</a>
        </div>
        <a href="https://assessment.mastermangroup.com/" target="_blank" rel="noopener" className="nav__cta">Free Assessment</a>
      </div>
    </nav>
  );
};

/* ============================================================
   HERO
   ============================================================ */
const Hero = ({ variant = 'A' }) => {
  const copy = {
    A: {
      h1: <>Successful on paper.<br/><em>Empty inside.</em></>,
      deck: 'You know the feeling. We built the place that fixes it.',
    },
    B: {
      h1: <>For the Muslim man who <em>made it</em> — and still feels off.</>,
      deck: "You didn't come this far to coast. Masterman is where the real work starts.",
    },
    C: {
      h1: <>Identity rooted in Allah. <em>Brotherhood you can call at 3am.</em> Direction you actually live.</>,
      deck: 'A movement for Muslim men who have run out of surface-level answers.',
    },
  }[variant];
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero__bg" style={{backgroundImage: `url(${IMG.heroA})`}} />
      <div className="hero__overlay" />
      <div className="hero__grain" />
      <div className="wrap">
        <div className="hero__inner">
          <span className="eyebrow">Identity · Brotherhood · Direction</span>
          <h1 className="hero__title">{copy.h1}</h1>
          <p className="hero__deck">{copy.deck}</p>
          <p className="hero__sub">
            Masterman is a structured brotherhood for Muslim men who have the career,
            the wife, the kids — and still feel out of alignment with Allah. Not another
            motivation loop. Identity work, honest brotherhood, and retreats that leave a mark.
          </p>
          <div className="hero__cta-row">
            <a href="https://assessment.mastermangroup.com/" target="_blank" rel="noopener" className="btn btn--primary">
              Take Free Assessment
              <span className="btn__arrow">→</span>
            </a>
            <a href="#method" className="btn btn--ghost">See How It Works</a>
          </div>
        </div>
      </div>
      <div className="hero__meta">
        <div className="hero__meta-line"><span className="hero__meta-dot" /><span>Applications open · New cohort</span></div>
        <div className="hero__meta-line"><span>A brotherhood for Muslim men</span></div>
      </div>
    </section>
  );
};

/* ============================================================
   PROBLEM
   ============================================================ */
const PROBLEM_CARDS = [
  {
    n: '01',
    title: 'The five prayers feel like five checklists.',
    body: 'Five prayers a day, but you feel further from Allah than ever. The rituals are there. The connection isn\'t.',
  },
  {
    n: '02',
    title: 'Everyone knows a version of you. No one knows you.',
    body: 'Surrounded by colleagues, friends, even a loving family — and still profoundly alone. No man truly knows you.',
  },
  {
    n: '03',
    title: 'Lose the job, the marriage, or the kids and you don\'t know who you are.',
    body: 'Your sense of self is tied to your role. When any of it shakes, you shake with it.',
  },
  {
    n: '04',
    title: 'You have goals for this year. You don\'t have a direction for your life.',
    body: 'Goals are tactical. Direction is strategic. You feel the difference every morning.',
  },
];

const Problem = () => (
  <section className="section" id="problem" data-screen-label="02 Problem">
    <div className="wrap">
      <div className="problem__head">
        <span className="eyebrow">Sound Familiar?</span>
        <h2 className="problem__h2">It's not a career problem.<br/>It's not a marriage problem.</h2>
        <div className="problem__intro">
          <p>You have the career. The wife. The kids. The house. By every external measure, you made it.</p>
          <p>But when the house is quiet and the phone is down, something doesn't add up. You feel alone in a room full of people. Your worth is tied to your title, your role, your results — and none of it is filling the hole.</p>
          <p>This is an identity problem. And it's more common than anyone admits.</p>
        </div>
      </div>
      <div className="problem__grid">
        {PROBLEM_CARDS.map(c => (
          <div key={c.n} className="problem__card">
            <span className="problem__card-num">{c.n}</span>
            <h3 className="problem__card-title">{c.title}</h3>
            <p className="problem__card-body">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   METHOD — with framework visual
   ============================================================ */
const PILLARS = [
  { n: 'I',  name: 'Identity',    body: 'Anchored in who Allah made you — not what the world expects you to produce. The ground every other part of your life is built on.' },
  { n: 'II', name: 'Brotherhood', body: 'Real men, real conversations. A circle that knows you, holds you accountable, and shows up at 3am if the call needs to be made.' },
  { n: 'III',name: 'Direction',   body: 'A clear vision for your life as a Muslim man — husband, father, leader — and the discipline to live it day after day.' },
];

const Method = ({ frameworkVariant }) => {
  const frameworkRef = React.useRef(null);
  const [hasPlayed, setHasPlayed] = React.useState(false);

  React.useEffect(() => {
    const el = frameworkRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setHasPlayed(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasPlayed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
  <section className="section method" id="method" data-screen-label="03 Method">
    <div className="wrap">
      <div className="method__head">
        <span className="eyebrow">The Method</span>
        <h2 className="method__h2">Three anchors.<br/>One unshakeable man.</h2>
        <p className="method__intro">
          Masterman is not therapy. Not a motivational program. Not a course you finish in a weekend.
        </p>
        <p className="method__intro">
          It's a structured environment where Muslim men do the real work: understanding who they are as servants of Allah before they are anything else. When identity is rooted in the Creator — not the career, not the wife, not the children — you become unshakeable. A better husband. A present father. A man with direction.
        </p>
        <p className="method__intro method__intro--final">
          We don't hand out inspiration. We build the structure, the brotherhood, and the accountability that make change hold long after the retreat ends.
        </p>
      </div>

      <div ref={frameworkRef} className={`framework ${hasPlayed ? 'is-playing' : ''}`}>
        <div className="framework__stage" key={frameworkVariant}>
          {React.createElement(window.FrameworkVisual, { variant: frameworkVariant })}
        </div>
      </div>
      <div className="framework__caption">The Masterman Method · I · II · III</div>

      <div className="pillars">
        {PILLARS.map(p => (
          <div key={p.n} className="pillar">
            <div className="pillar__mark">Pillar {p.n}</div>
            <h3 className="pillar__title">{p.name}</h3>
            <p className="pillar__body">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

/* ============================================================
   PROGRAMS
   ============================================================ */
const PROGRAMS = [
  {
    rung: 'Rung I',
    name: 'MasterMan Nation',
    tag: 'Free · Open Access',
    desc: 'Weekly guidance, practical reminders, and a growth-focused community of Muslim men walking the same path.',
    fitFor: 'Men who want to start with consistent support and a real community.',
    notFor: 'Men who already have structure and are ready for deep work — skip to Inner Circle.',
    entry: 'Join free.',
    cta: 'Join Community',
    ctaKind: 'ghost',
    href: 'https://www.skool.com/mastermannation',
    external: true,
  },
  {
    rung: 'Rung II',
    name: 'MasterMan Inner Circle',
    tag: 'Mentorship brotherhood',
    desc: 'High-accountability circle for men who want structure, mentorship, and weekly implementation across every area of life.',
    fitFor: 'Men 25–45, professionally established, ready to commit to the real work.',
    notFor: 'Men in full-time education, men needing clinical therapy, men looking for a 30-day challenge.',
    entry: 'Application + 30-min discovery call.',
    cta: 'Take Free Assessment',
    ctaKind: 'primary',
    featured: true,
    href: 'https://assessment.mastermangroup.com/',
    external: true,
  },
  {
    rung: 'Rung III',
    name: 'MasterMan Retreats',
    tag: 'Immersive weekend',
    desc: 'Step out of the noise. Spiritual grounding, strategic life planning, and brotherhood that lasts long after the weekend ends.',
    fitFor: 'Men ready for a breakthrough experience and a reset with other brothers.',
    notFor: "Men new to the work — the retreat compounds what's already being built in Nation or Inner Circle.",
    entry: 'Application for the next retreat.',
    cta: 'See Retreat Options',
    ctaKind: 'ghost',
    href: 'retreats.html',
    external: false,
  },
];

const CheckIcon = () => (
  <svg className="program__fit-icon" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 6.5 L5 9 L10 3" strokeLinecap="square" />
  </svg>
);
const XIcon = () => (
  <svg className="program__fit-icon" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 3 L9 9 M9 3 L3 9" strokeLinecap="square" />
  </svg>
);

const Programs = () => (
  <section className="section" id="programs" data-screen-label="04 Programs">
    <div className="wrap">
      <div className="programs__head">
        <span className="eyebrow">Our Programs</span>
        <h2 className="programs__h2">Three rungs.<br/>Meet yourself at the right one.</h2>
        <p className="programs__sub">
          Each program meets you at a different stage of the work. Start where you are. <em>We'll say so on the call if you should be one rung lower.</em>
        </p>
      </div>
      <div className="programs__grid">
        {PROGRAMS.map(p => (
          <div key={p.name} className={`program ${p.featured ? 'program--featured' : ''}`}>
            <div className="program__rung">{p.rung}</div>
            <h3 className="program__name">{p.name}</h3>
            <p className="program__tagline">{p.tag}</p>
            <p className="program__desc">{p.desc}</p>
            <div className="program__fit">
              <div className="program__fit-row program__fit-row--fit">
                <CheckIcon />
                <div>
                  <div className="program__fit-label">Who it's for</div>
                  <p className="program__fit-text">{p.fitFor}</p>
                </div>
              </div>
              <div className="program__fit-row program__fit-row--notfit">
                <XIcon />
                <div>
                  <div className="program__fit-label">Who it's not for</div>
                  <p className="program__fit-text">{p.notFor}</p>
                </div>
              </div>
            </div>
            <p className="program__entry"><strong>Entry.</strong> {p.entry}</p>
            <a href={p.href}
              {...(p.external ? {target: '_blank', rel: 'noopener'} : {})}
              className={`btn btn--${p.ctaKind} program__cta`}>
              {p.cta}
              <span className="btn__arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   RETREAT
   ============================================================ */
const Retreat = () => (
  <section className="section retreat" id="retreats" data-screen-label="05 Retreat">
    <div className="wrap">
      <div className="retreat__layout">
        <div className="retreat__body">
          <span className="eyebrow">Retreat Experience</span>
          <h2 className="retreat__h2">Four days. One mountain. A different man going home.</h2>
          <p>The retreat is a reset. Brothers train together before sunrise, pray together through the day, sit with hard questions after Isha, and leave with a written personal plan that survives the drive home.</p>
          <p>This is where identity work becomes lived action. Intense environment. Strong accountability. Brotherhood that lasts long after the weekend ends.</p>
        </div>
        <div className="retreat__feature-img" style={{backgroundImage: `url(${IMG.retreat})`}} />
      </div>

      <div className="gallery">
        <h3 className="gallery__h3">What a retreat actually looks like.</h3>
        <p className="gallery__sub">Preview from the last retreat — Broken Bow, February 2026.</p>
        <div className="gallery__grid">
          <div className="gallery__cell gallery__cell--tall" style={{backgroundImage: `url(${IMG.g1})`}} />
          <div className="gallery__cell" style={{backgroundImage: `url(${IMG.g2})`}} />
          <div className="gallery__cell" style={{backgroundImage: `url(${IMG.g3})`}} />
          <div className="gallery__cell" style={{backgroundImage: `url(${IMG.g4})`}} />
          <div className="gallery__cell" style={{backgroundImage: `url(${IMG.g5})`}} />
        </div>
      </div>

      <div className="retreat__upcoming">
        <div>
          <div className="retreat__up-label">Upcoming</div>
          <div className="retreat__up-when">June 2026 · Smoky Mountains, Tennessee</div>
          <p className="retreat__up-desc">Small-group immersion. Identity, discipline, and brotherhood in a high-accountability setting.</p>
          <div className="retreat__up-capacity">Limited capacity · 14 seats</div>
        </div>
        <a href="https://apply.mastermangroup.com/" target="_blank" rel="noopener" className="btn btn--primary">Apply for the Next Retreat<span className="btn__arrow">→</span></a>
      </div>
    </div>
  </section>
);

/* ============================================================
   YOUTUBE
   ============================================================ */
const PlayBtn = () => (
  <div className="video__play">
    <div className="video__play-btn">
      <svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 2 L16 9 L4 16 Z" /></svg>
    </div>
  </div>
);

const YouTube = () => (
  <section className="section section--tight" id="channel" data-screen-label="06 Channel">
    <div className="wrap">
      <div className="youtube__layout">
        <div>
          <span className="eyebrow">From the Channel</span>
          <h3 className="youtube__h3">Watch Abdullah teach.</h3>
          <p className="youtube__desc">Weekly teachings on identity, brotherhood, and the work of becoming a Muslim man with direction. Start here if you want a feel for how we think before you apply.</p>
          <a href="https://www.youtube.com/@shabdullahoduro" target="_blank" rel="noopener" className="youtube__link">Visit YouTube Channel →</a>
        </div>
        <div className="videos">
          <a href="https://www.youtube.com/@shabdullahoduro" target="_blank" rel="noopener"
             className="video" style={{backgroundImage: `url(${IMG.yt1})`}}>
            <PlayBtn />
            <div className="video__meta">
              What Actually Happens At A Masterman Retreat
              <span className="video__dur">24 min</span>
            </div>
          </a>
          <a href="https://www.youtube.com/@shabdullahoduro" target="_blank" rel="noopener"
             className="video" style={{backgroundImage: `url(${IMG.yt2})`}}>
            <PlayBtn />
            <div className="video__meta">
              How To Rebuild Your Life in Your 30s–40s
              <span className="video__dur">30 min</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   TESTIMONIALS
   ============================================================ */
const LONG_TESTIMONIALS = [
  {
    quote: "I argue less with my wife — and she concurs. It sounds mundane, but me actually doing what I'm supposed to — praying on time, reading Qur'an, exercising, reflecting — makes me a better husband. The work is real. The difference shows up at home first.",
    name: 'Tim Farid',
    role: 'Masterman Inner Circle',
    avatar: 'assets/photos/testimonial-1.jpg',
  },
  {
    quote: "This has been a transformative Ramadan — not just for me, but for everyone in the household. Worshipping Allah together with my wife and kids. Praying together. Accountability for it. Masterman is what keeps salah established across the whole family, not just for me as an individual.",
    name: 'Adnan Khan',
    role: 'Masterman Inner Circle',
    avatar: 'assets/photos/testimonial-2.jpg',
  },
  {
    quote: "My desire to make time for the Qur'an has grown. I'm praying at the masjid a lot more — at least once a day. I had to change my perspective: my purpose here is to please Allah ﷻ, not to please people. The Masterman app lets me check off my non-negotiables each day — gym, salah, Qur'an. That accountability is exactly what I needed.",
    name: 'Mohammad Ali Itani',
    role: 'Masterman Inner Circle',
    avatar: 'assets/photos/testimonial-3.jpg',
  },
];

const SHORT_TESTIMONIALS = [
  { q: "Alhamdulillah, I am grateful to find a blessed brotherhood of Muslim men working together to become the best versions of ourselves.", n: 'Zubair Mohammed', r: 'MasterMan Nation' },
  { q: "I cannot enumerate every benefit of the Inner Circle. Alhamdulillah I am now outrunning my toddler and doing pushups again.", n: 'Jack Whitacre, PhD', r: 'Inner Circle' },
  { q: "Joining the community brought a profound mindset shift and strengthened my awareness of Allah in daily life.", n: 'Mikail Daskalakis', r: 'MasterMan Nation' },
  { q: "The first 30 days gave me structure, stronger self-awareness, and momentum in discipline.", n: 'Najib Saliu-Ahmed', r: 'Wins & Accountability' },
  { q: "Lost 5 lbs in the first month and regained consistency with training and energy.", n: 'Haris Shaikh', r: 'Inner Circle' },
  { q: "One of the best retreats I have participated in. I highly recommend it.", n: 'Coach Abdirahman', r: 'Retreat Participant' },
];

const Testimonials = () => (
  <section className="section" id="testimonials" data-screen-label="07 Testimonials">
    <div className="wrap">
      <div className="testi__head">
        <span className="eyebrow">From the Brotherhood</span>
        <h2 className="testi__h2">These men came in empty.<br/>This is what they say now.</h2>
      </div>
      <div className="testi__features">
        {LONG_TESTIMONIALS.map((t, i) => (
          <div key={i} className="testi-feature">
            <div className="testi-feature__mark">"</div>
            <p className="testi-feature__quote">{t.quote}</p>
            <div className="testi-feature__attr">
              <div className="testi-feature__avatar" style={{backgroundImage: `url(${t.avatar})`}} />
              <div>
                <p className="testi-feature__name">{t.name}</p>
                <p className="testi-feature__role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testi__shortgrid">
        {SHORT_TESTIMONIALS.map((t, i) => (
          <div key={i} className="testi-short">
            <p className="testi-short__quote">"{t.q}"</p>
            <div>
              <p className="testi-short__attr">{t.n}</p>
              <p className="testi-short__role">{t.r}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="testi__videos">
        {[{src: IMG.tv1, n: 'Faizan Siddiqui',  r: 'Masterman Inner Circle', href: 'https://www.loom.com/share/cedc9ffeee15461198cebc2acc6968a8'},
          {src: IMG.tv2, n: 'Abdullah Muhammad', r: 'Masterman Inner Circle', href: 'https://www.loom.com/share/3045f9003fd54d658d3ba2de1ed14968'},
          {src: IMG.tv3, n: 'Risad Khandaker',   r: 'Masterman Inner Circle', href: 'https://www.loom.com/share/7e8c89c917254929999ce0e735ebd77d'}].map((v, i) => (
          <a key={i} href={v.href} target="_blank" rel="noopener"
             className="testi-video" style={{backgroundImage: `url(${v.src})`}}>
            <PlayBtn />
            <div className="testi-video__name">
              {v.n}
              <br/><span className="testi-video__role">{v.r}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   FINAL CTA
   ============================================================ */
const FinalCTA = () => (
  <section className="section finalcta" id="apply" data-screen-label="08 Apply">
    <div className="finalcta__bg" style={{backgroundImage: `url(${IMG.finalcta})`}} />
    <div className="wrap">
      <div className="finalcta__inner">
        <span className="eyebrow">Ready?</span>
        <h2 className="finalcta__h2">The work starts when you decide it does.</h2>
        <div className="finalcta__body">
          <p>We don't take everyone. This is for the Muslim man serious about the work — not looking for a quick fix, not chasing motivation, but ready to build something real.</p>
          <p>If that's not you, the free community is the right door. No offense taken. No pressure to move up.</p>
        </div>
        <div className="finalcta__ctas">
          <a href="https://assessment.mastermangroup.com/" target="_blank" rel="noopener" className="btn btn--primary">Take Free Assessment<span className="btn__arrow">→</span></a>
          <a href="https://apply.mastermangroup.com/" target="_blank" rel="noopener" className="btn btn--ghost">Book a Discovery Call</a>
          <a href="https://www.skool.com/mastermannation" target="_blank" rel="noopener" className="btn btn--link">Join Nation — Free →</a>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   FOOTER
   ============================================================ */
const Footer = ({ logoPath = 'assets/logo-mark.png' }) => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer__top">
        <p className="footer__tag">For the Muslim man ready to do the real work.</p>
        <div className="footer__brand">
          <img src={logoPath} alt="" />
          <span className="footer__brand-word">Masterman</span>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__links">
          <a className="footer__link" href="programs.html">Programs</a>
          <a className="footer__link" href="about.html">About</a>
          <a className="footer__link" href="retreats.html">Retreats</a>
          <a className="footer__link" href="https://apply.mastermangroup.com/" target="_blank" rel="noopener">Apply</a>
          <a className="footer__link" href="https://assessment.mastermangroup.com/" target="_blank" rel="noopener">Assessment</a>
        </div>
        <div className="footer__copy">© 2026 Masterman. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

Object.assign(window, {
  MMSplash: Splash,
  MMNav: Nav,
  MMHero: Hero,
  MMProblem: Problem,
  MMMethod: Method,
  MMPrograms: Programs,
  MMRetreat: Retreat,
  MMYouTube: YouTube,
  MMTestimonials: Testimonials,
  MMFinalCTA: FinalCTA,
  MMFooter: Footer,
});
