export function Vision() {
  return (
    <section
      id="vision"
      className="reveal py-20 md:py-28 border-t border-white/5"
      style={{ backgroundColor: '#040404' }}
    >
      <div className="section-inner">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left column: text */}
          <div className="flex-1">
            <p className="reveal font-mono text-xs uppercase tracking-widest text-[#ff6b2b] mb-4">
              The Vision
            </p>
            <h2 className="reveal reveal-delay-1 font-fraunces text-3xl md:text-5xl font-light text-white leading-tight mb-8">
              Every municipality&apos;s open data, findable and queryable by AI.
            </h2>

            {/* Stats row */}
            <div className="reveal reveal-delay-2 flex flex-row gap-8">
              <div>
                <p className="font-fraunces text-3xl md:text-4xl font-light text-white mb-1">
                  183,000+
                </p>
                <p className="font-sans text-[#6b7280] text-sm">cities worldwide</p>
              </div>
              <div
                className="w-px self-stretch"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-hidden
              />
              <div>
                <p className="font-fraunces text-3xl md:text-4xl font-light text-white mb-1">
                  Petabytes
                </p>
                <p className="font-sans text-[#6b7280] text-sm">of untapped civic data</p>
              </div>
            </div>
          </div>

          {/* Right column: animated SVG network diagram */}
          <div
            className="reveal reveal-delay-3 shrink-0 w-56 h-40 md:w-72 md:h-52"
            aria-hidden
          >
            <svg
              viewBox="0 0 260 180"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connecting lines */}
              <line x1="130" y1="90" x2="50" y2="35" stroke="rgba(255,107,43,0.4)" strokeWidth="1" />
              <line x1="130" y1="90" x2="210" y2="45" stroke="rgba(255,107,43,0.4)" strokeWidth="1" />
              <line x1="130" y1="90" x2="55" y2="145" stroke="rgba(255,107,43,0.4)" strokeWidth="1" />
              <line x1="130" y1="90" x2="205" y2="148" stroke="rgba(255,107,43,0.4)" strokeWidth="1" />
              <line x1="130" y1="90" x2="130" y2="22" stroke="rgba(255,107,43,0.4)" strokeWidth="1" />
              <line x1="130" y1="90" x2="22" y2="90" stroke="rgba(255,107,43,0.4)" strokeWidth="1" />

              {/* Satellite nodes */}
              <circle cx="50" cy="35" r="5" fill="#ffffff" opacity="0.35" />
              <circle cx="210" cy="45" r="5" fill="#ffffff" opacity="0.35" />
              <circle cx="55" cy="145" r="5" fill="#ffffff" opacity="0.35" />
              <circle cx="205" cy="148" r="5" fill="#ffffff" opacity="0.35" />
              <circle cx="130" cy="22" r="4" fill="#ffffff" opacity="0.25" />
              <circle cx="22" cy="90" r="4" fill="#ffffff" opacity="0.25" />

              {/* Pulsing rings on satellite nodes */}
              <circle cx="50" cy="35" r="9" fill="none" stroke="rgba(255,107,43,0.2)" strokeWidth="1">
                <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="210" cy="45" r="9" fill="none" stroke="rgba(255,107,43,0.2)" strokeWidth="1">
                <animate attributeName="r" values="6;12;6" dur="3.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="3.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="55" cy="145" r="9" fill="none" stroke="rgba(255,107,43,0.2)" strokeWidth="1">
                <animate attributeName="r" values="6;12;6" dur="2.7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="205" cy="148" r="9" fill="none" stroke="rgba(255,107,43,0.2)" strokeWidth="1">
                <animate attributeName="r" values="6;12;6" dur="4.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="4.2s" repeatCount="indefinite" />
              </circle>

              {/* Central node with pulse-glow */}
              <circle cx="130" cy="90" r="14" fill="rgba(255,107,43,0.15)" />
              <circle cx="130" cy="90" r="14" fill="none" stroke="rgba(255,107,43,0.3)" strokeWidth="1">
                <animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="130" cy="90" r="8" fill="#ff6b2b" opacity="0.9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
