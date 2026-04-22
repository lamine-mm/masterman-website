// FrameworkVisual.jsx — The Masterman Method
// Three concept variants. Gold accent on anchor/center only.
// One-color line art on dark. Geometric, Bauhaus/Tufte.

const FrameworkVisual = ({ variant = 'anchor' }) => {
  if (variant === 'anchor') return <FrameworkAnchor />;
  if (variant === 'triad')  return <FrameworkTriad />;
  if (variant === 'vertex') return <FrameworkVertex />;
  return <FrameworkAnchor />;
};

/* ------------------------------------------------------------
   OPTION A — Anchor (Identity) + Circle (Brotherhood) + Vector (Direction)
   Reads bottom→top: root → community → trajectory.
   ------------------------------------------------------------ */
const FrameworkAnchor = () => (
  <svg
    className="framework__svg"
    viewBox="0 10 720 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="The Masterman Method — Identity, Brotherhood, Direction"
  >
    <defs>
      <marker id="arrowhead-a" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <path d="M1 1 L9 5 L1 9 Z" fill="#C8A24B" />
      </marker>
    </defs>

    {/* faint construction grid — Bauhaus feel */}
    <g opacity="0.09" stroke="#A9A39A" strokeWidth="0.5">
      <line x1="360" y1="30" x2="360" y2="490" />
      <line x1="110"  y1="300" x2="610" y2="300" />
    </g>

    {/* Brotherhood — circle surrounding identity */}
    <circle cx="360" cy="300" r="150"
      stroke="#F4EFE6" strokeWidth="1" opacity="0.85" />
    {/* subtle second ring for depth / intentionality */}
    <circle cx="360" cy="300" r="158"
      stroke="#F4EFE6" strokeWidth="0.5" opacity="0.25"
      strokeDasharray="2 4" />

    {/* Direction — vertical vector extending up through the ring */}
    <line x1="360" y1="430" x2="360" y2="70"
      stroke="#F4EFE6" strokeWidth="1"
      markerEnd="url(#arrowhead-a)" />

    {/* crossbar — anchor horizontal */}
    <line x1="318" y1="430" x2="402" y2="430"
      stroke="#C8A24B" strokeWidth="2" strokeLinecap="square" />

    {/* Identity — anchor hooks (gold) */}
    <path d="M 318 430 Q 300 452 320 470 L 328 462"
      stroke="#C8A24B" strokeWidth="2" fill="none" strokeLinecap="square" />
    <path d="M 402 430 Q 420 452 400 470 L 392 462"
      stroke="#C8A24B" strokeWidth="2" fill="none" strokeLinecap="square" />

    {/* Anchor shank — gold segment from crossbar down to where it passes ring bottom */}
    <line x1="360" y1="430" x2="360" y2="470"
      stroke="#C8A24B" strokeWidth="2" strokeLinecap="square" />

    {/* intersection nodes — where vector meets circle */}
    <circle cx="360" cy="150" r="3" fill="#F4EFE6" />
    <circle cx="360" cy="450" r="3" fill="#F4EFE6" opacity="0.4" />

    {/* connector tick from circle edge to label (right side) */}
    <line x1="510" y1="300" x2="540" y2="300"
      stroke="#C8A24B" strokeWidth="1" opacity="0.6" />

    {/* Labels */}
    <g fontFamily="Fraunces, serif" fill="#F4EFE6">
      {/* DIRECTION — top */}
      <text x="360" y="50" textAnchor="middle" fontSize="13"
        letterSpacing="4" style={{textTransform:'uppercase'}} fill="#C8A24B">
        III · DIRECTION
      </text>
      <text x="360" y="22" textAnchor="middle" fontSize="11"
        fill="#A9A39A" fontStyle="italic">trajectory</text>

      {/* BROTHERHOOD — right on the ring */}
      <text x="548" y="296" textAnchor="start" fontSize="13"
        letterSpacing="4" fill="#C8A24B">II · BROTHERHOOD</text>
      <text x="548" y="316" textAnchor="start" fontSize="11"
        fill="#A9A39A" fontStyle="italic">the circle</text>

      {/* IDENTITY — bottom */}
      <text x="360" y="500" textAnchor="middle" fontSize="13"
        letterSpacing="4" fill="#C8A24B">I · IDENTITY</text>
    </g>

    {/* small tick marks on the vector — progression milestones */}
    <g stroke="#F4EFE6" strokeWidth="1" opacity="0.35">
      <line x1="355" y1="390" x2="365" y2="390" />
      <line x1="355" y1="345" x2="365" y2="345" />
      <line x1="355" y1="255" x2="365" y2="255" />
      <line x1="355" y1="210" x2="365" y2="210" />
    </g>
  </svg>
);

/* ------------------------------------------------------------
   OPTION B — Three overlapping forms (diamonds) in a triad.
   Shared interior = the man Masterman builds.
   ------------------------------------------------------------ */
const FrameworkTriad = () => (
  <svg
    className="framework__svg"
    viewBox="0 70 600 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="The Masterman Method — Identity, Brotherhood, Direction"
  >
    {/* three overlapping circles — one gold (the man at the center) */}
    <g stroke="#F4EFE6" strokeWidth="1" fill="none">
      {/* Identity — bottom */}
      <circle className="mm-circle mm-circle--identity" cx="300" cy="340" r="120" />
      {/* Brotherhood — upper-left */}
      <circle className="mm-circle mm-circle--brotherhood" cx="220" cy="220" r="120" />
      {/* Direction — upper-right */}
      <circle className="mm-circle mm-circle--direction" cx="380" cy="220" r="120" />
    </g>

    {/* Shared center — gold filled marker */}
    <circle className="mm-center-dot" cx="300" cy="260" r="6" fill="#C8A24B" />
    <circle className="mm-center-ring" cx="300" cy="260" r="14" stroke="#C8A24B" strokeWidth="1" fill="none" opacity="0.6" />

    {/* Labels */}
    <g fontFamily="Fraunces, serif">
      <text className="mm-label mm-label--identity"
        x="300" y="490" textAnchor="middle" fontSize="13"
        letterSpacing="4" fill="#C8A24B">I · IDENTITY</text>
      <text className="mm-label mm-label--brotherhood"
        x="96" y="175" textAnchor="start" fontSize="13"
        letterSpacing="4" fill="#C8A24B">II · BROTHERHOOD</text>
      <text className="mm-label mm-label--direction"
        x="504" y="175" textAnchor="end" fontSize="13"
        letterSpacing="4" fill="#C8A24B">III · DIRECTION</text>

      <text className="mm-label mm-label--center"
        x="300" y="296" textAnchor="middle" fontSize="11"
        fill="#A9A39A" fontStyle="italic">the man</text>
    </g>

    {/* connectors */}
    <g className="mm-connectors" stroke="#C8A24B" strokeWidth="0.5" opacity="0.4">
      <line x1="300" y1="260" x2="220" y2="220" strokeDasharray="2 3" />
      <line x1="300" y1="260" x2="380" y2="220" strokeDasharray="2 3" />
      <line x1="300" y1="260" x2="300" y2="340" strokeDasharray="2 3" />
    </g>
  </svg>
);

/* ------------------------------------------------------------
   OPTION C — Triangle with I/B/D at vertices; interior triangle = the man.
   ------------------------------------------------------------ */
const FrameworkVertex = () => (
  <svg
    className="framework__svg"
    viewBox="0 30 600 470"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="The Masterman Method — Identity, Brotherhood, Direction"
  >
    {/* outer triangle */}
    <polygon points="300,80 520,440 80,440"
      stroke="#F4EFE6" strokeWidth="1" fill="none" />

    {/* interior triangle — smaller, rotated */}
    <polygon points="300,200 390,380 210,380"
      stroke="#C8A24B" strokeWidth="1.25" fill="none" />

    {/* Center mark — the man */}
    <circle cx="300" cy="320" r="4" fill="#C8A24B" />

    {/* vertex dots */}
    <circle cx="300" cy="80"  r="4" fill="#F4EFE6" />
    <circle cx="520" cy="440" r="4" fill="#F4EFE6" />
    <circle cx="80"  cy="440" r="4" fill="#F4EFE6" />

    {/* faint bisectors */}
    <g stroke="#F4EFE6" strokeWidth="0.5" opacity="0.2">
      <line x1="300" y1="80"  x2="300" y2="440" />
      <line x1="520" y1="440" x2="190" y2="260" />
      <line x1="80"  y1="440" x2="410" y2="260" />
    </g>

    {/* Labels */}
    <g fontFamily="Fraunces, serif">
      <text x="300" y="52" textAnchor="middle" fontSize="13"
        letterSpacing="4" fill="#C8A24B">III · DIRECTION</text>
      <text x="540" y="468" textAnchor="end" fontSize="13"
        letterSpacing="4" fill="#C8A24B">II · BROTHERHOOD</text>
      <text x="60" y="468" textAnchor="start" fontSize="13"
        letterSpacing="4" fill="#C8A24B">I · IDENTITY</text>
      <text x="300" y="342" textAnchor="middle" fontSize="10"
        fill="#A9A39A" fontStyle="italic" letterSpacing="2">the man at the center</text>
    </g>
  </svg>
);

window.FrameworkVisual = FrameworkVisual;
