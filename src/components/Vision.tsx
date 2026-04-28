export function Vision() {
  return (
    <section
      id="vision"
      className="reveal section-padding border-t border-line bg-surface"
    >
      <div className="section-inner">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="flex-1 min-w-0">
            <p className="reveal eyebrow mb-4">The vision</p>
            <h2 className="reveal reveal-delay-1 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-boston-charles leading-tight mb-8 uppercase tracking-tight">
              Every municipality&apos;s open data, findable and queryable by AI.
            </h2>

            <div className="reveal reveal-delay-2 flex flex-row gap-5 md:gap-8">
              <div>
                <p className="font-heading font-extrabold text-2xl md:text-4xl text-boston-charles mb-1 tracking-tight">
                  183,000+
                </p>
                <p className="font-sans text-ink-body text-sm">Cities worldwide</p>
              </div>
              <div className="w-px self-stretch shrink-0 bg-line" aria-hidden />
              <div>
                <p className="font-heading font-extrabold text-2xl md:text-4xl text-boston-charles mb-1 tracking-tight">
                  Petabytes
                </p>
                <p className="font-sans text-ink-body text-sm">Of civic data ready for responsible use</p>
              </div>
            </div>
          </div>

          <div
            className="reveal reveal-delay-3 shrink-0 w-48 h-36 md:w-72 md:h-52"
            aria-hidden
          >
            <svg
              viewBox="0 0 260 180"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="130" y1="90" x2="50" y2="35" stroke="rgba(24,113,189,0.5)" strokeWidth="1" />
              <line x1="130" y1="90" x2="210" y2="45" stroke="rgba(24,113,189,0.5)" strokeWidth="1" />
              <line x1="130" y1="90" x2="55" y2="145" stroke="rgba(24,113,189,0.5)" strokeWidth="1" />
              <line x1="130" y1="90" x2="205" y2="148" stroke="rgba(24,113,189,0.5)" strokeWidth="1" />
              <line x1="130" y1="90" x2="130" y2="22" stroke="rgba(24,113,189,0.5)" strokeWidth="1" />
              <line x1="130" y1="90" x2="22" y2="90" stroke="rgba(24,113,189,0.5)" strokeWidth="1" />

              <circle cx="50" cy="35" r="5" fill="#45789C" opacity="0.5" />
              <circle cx="210" cy="45" r="5" fill="#45789C" opacity="0.5" />
              <circle cx="55" cy="145" r="5" fill="#45789C" opacity="0.5" />
              <circle cx="205" cy="148" r="5" fill="#45789C" opacity="0.5" />
              <circle cx="130" cy="22" r="4" fill="#45789C" opacity="0.35" />
              <circle cx="22" cy="90" r="4" fill="#45789C" opacity="0.35" />

              <circle cx="50" cy="35" r="9" fill="none" stroke="rgba(24,113,189,0.35)" strokeWidth="1">
                <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="210" cy="45" r="9" fill="none" stroke="rgba(24,113,189,0.35)" strokeWidth="1">
                <animate attributeName="r" values="6;12;6" dur="3.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="55" cy="145" r="9" fill="none" stroke="rgba(24,113,189,0.35)" strokeWidth="1">
                <animate attributeName="r" values="6;12;6" dur="2.7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="205" cy="148" r="9" fill="none" stroke="rgba(24,113,189,0.35)" strokeWidth="1">
                <animate attributeName="r" values="6;12;6" dur="4.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="4.2s" repeatCount="indefinite" />
              </circle>

              <circle cx="130" cy="90" r="14" fill="rgba(24,113,189,0.15)" />
              <circle cx="130" cy="90" r="14" fill="none" stroke="rgba(9,31,47,0.35)" strokeWidth="1">
                <animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.45;0;0.45" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="130" cy="90" r="8" fill="#1871bd" opacity="0.95" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
