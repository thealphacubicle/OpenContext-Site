const items = [
  { text: 'An open data portal (CKAN, Socrata, or ArcGIS)', num: '01' },
  { text: 'A cloud account (AWS, GCP, or Azure)', num: '02' },
  { text: 'About 15 minutes', num: '03' },
]

export function WhatYouNeed() {
  return (
    <section id="what-you-need" className="section-padding border-t border-white/5 relative overflow-hidden">
      {/* Subtle right-side glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0"
        style={{
          width: '40%',
          background:
            'radial-gradient(ellipse 80% 60% at 100% 50%, rgba(255,107,43,0.05) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="section-inner relative z-10">
        <h2 className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b] mb-6">
          What you need
        </h2>
        <ul className="space-y-0 max-w-xl">
          {items.map((item, i) => (
            <li
              key={item.text}
              className={`reveal reveal-delay-${i + 1} relative flex items-center gap-4 py-6 border-b border-white/8 last:border-0 overflow-hidden`}
            >
              {/* Watermark number */}
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 font-mono font-light text-white select-none pointer-events-none leading-none"
                style={{ fontSize: '4.5rem', opacity: 0.04 }}
                aria-hidden
              >
                {item.num}
              </span>

              {/* SVG checkmark */}
              <span className="shrink-0" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="rgba(255,107,43,0.5)" strokeWidth="1.5" />
                  <path
                    d="M6 10l3 3 5-5"
                    stroke="#ff6b2b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="font-sans text-white text-2xl md:text-3xl font-light leading-relaxed relative z-10">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
