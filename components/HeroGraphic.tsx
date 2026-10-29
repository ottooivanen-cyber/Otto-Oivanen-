// Original abstract graphic: the arc of a set travelling over a net line,
// drawn as thin contour lines. Purely decorative.
export function HeroGraphic({ className = "" }: { className?: string }) {
  const arcs = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <defs>
        <radialGradient id="hg-glow" cx="54%" cy="38%" r="46%">
          <stop offset="0%" stopColor="#d8d2c0" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#d8d2c0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hg-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ecebe7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ecebe7" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <rect width="480" height="480" fill="url(#hg-glow)" />

      <g className="hero-drift" style={{ transformOrigin: "240px 240px" }}>
        {/* contour arcs */}
        {arcs.map((i) => (
          <path
            key={i}
            d={`M ${20 + i * 6} ${430 - i * 4} Q ${240} ${40 + i * 22} ${460 - i * 6} ${430 - i * 4}`}
            stroke="url(#hg-fade)"
            strokeWidth={i === 0 ? 1.2 : 0.6}
            opacity={1 - i * 0.09}
          />
        ))}

        {/* dotted trajectory */}
        <path
          d="M 70 400 Q 250 20 410 330"
          stroke="#ecebe7"
          strokeOpacity="0.5"
          strokeWidth="1.2"
          strokeDasharray="1 9"
          strokeLinecap="round"
        />

        {/* net */}
        <line x1="240" y1="300" x2="240" y2="455" stroke="#ecebe7" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="40" y1="455" x2="440" y2="455" stroke="#ecebe7" strokeOpacity="0.18" strokeWidth="1" />
        {Array.from({ length: 6 }, (_, i) => (
          <line
            key={i}
            x1="232"
            x2="248"
            y1={304 + i * 10}
            y2={304 + i * 10}
            stroke="#ecebe7"
            strokeOpacity="0.22"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* ball at the apex */}
      <g className="hero-ball">
        <circle cx="262" cy="156" r="15" stroke="#ecebe7" strokeOpacity="0.85" strokeWidth="1.2" />
        <path d="M 249 149 Q 262 160 275 149" stroke="#ecebe7" strokeOpacity="0.5" strokeWidth="0.9" />
        <path d="M 256 142 Q 252 158 262 171" stroke="#ecebe7" strokeOpacity="0.5" strokeWidth="0.9" />
      </g>
    </svg>
  );
}
