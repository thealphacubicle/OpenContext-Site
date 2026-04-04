const nodes = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        <path d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
      </svg>
    ),
    step: '01',
    title: 'Your City\'s Data Portal',
    subtitle: 'CKAN · ArcGIS · Socrata',
    description:
      'Your city already hosts open datasets online — permits, 311 requests, budgets, and more. OpenContext works with the most common government data platforms. Nothing about your existing setup needs to change.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 7h.01M11 7h6M7 11h.01M11 11h6" />
      </svg>
    ),
    step: '02',
    title: 'OpenContext',
    subtitle: 'Runs on AWS · Always available',
    description:
      'A lightweight server that acts as a secure bridge. It translates questions from AI assistants into data portal queries, then returns the results in a format AI can understand. Your data never moves until explicitly requested — and only to answer that specific question.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
    step: '03',
    title: 'Claude AI',
    subtitle: 'Any MCP-compatible assistant',
    description:
      'Once connected, Claude can search your datasets and answer questions in plain English — no SQL, no dashboards, no data exports. Ask "How many potholes were reported last month?" and get a direct answer drawn from live city data.',
  },
]

export function ConnectionFlow() {
  return (
    <section className="py-16 md:py-24 border-t border-white/5">
      <div className="section-inner">
        {/* Header */}
        <p className="reveal font-mono text-xs uppercase tracking-widest text-[#ff6b2b] mb-4">
          How it connects
        </p>
        <h2 className="reveal font-fraunces text-3xl md:text-4xl font-light text-white leading-tight mb-14 max-w-lg">
          Three pieces. One seamless pipeline.
        </h2>

        {/* Flow */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {nodes.map((node, i) => (
            <div key={node.step} className="flex flex-col md:flex-row items-stretch flex-1">
              {/* Node card */}
              <div
                className={`reveal reveal-delay-${i + 1} flex-1 flex flex-col p-6 md:p-8`}
                style={{
                  background: '#0f0f0f',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                }}
              >
                {/* Step + icon row */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-mono text-xs text-[#ff6b2b] flex-shrink-0"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {node.step}
                  </span>
                  <span
                    className="flex items-center justify-center w-11 h-11 flex-shrink-0"
                    style={{
                      background: 'rgba(255,107,43,0.08)',
                      border: '1px solid rgba(255,107,43,0.2)',
                      borderRadius: '50%',
                      color: '#ff6b2b',
                    }}
                  >
                    {node.icon}
                  </span>
                </div>

                {/* Text */}
                <p className="font-fraunces text-white font-semibold text-lg mb-1 leading-snug">
                  {node.title}
                </p>
                <p className="font-mono text-xs text-[#6b7280] mb-4">{node.subtitle}</p>
                <p className="font-sans text-[#9ca3af] text-sm leading-relaxed flex-1">
                  {node.description}
                </p>
              </div>

              {/* Connector arrow (between nodes only) */}
              {i < nodes.length - 1 && (
                <>
                  {/* Mobile: vertical */}
                  <div className="flex flex-col items-center py-3 md:hidden" aria-hidden>
                    <div style={{ width: '2px', height: '32px', background: 'rgba(255,107,43,0.2)' }} />
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 1L5 7L9 1" stroke="rgba(255,107,43,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Desktop: horizontal */}
                  <div className="hidden md:flex items-center flex-shrink-0 px-3" aria-hidden>
                    <div style={{ width: '40px', height: '2px', background: 'rgba(255,107,43,0.2)' }} />
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" style={{ marginLeft: '-1px' }}>
                      <path d="M1 1L7 5L1 9" stroke="rgba(255,107,43,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="reveal reveal-delay-4 font-sans text-xs text-[#6b7280] mt-10 max-w-md leading-relaxed">
          OpenContext is a read-only bridge — it can query your data, but cannot write, edit, or delete anything in your portal.
        </p>
      </div>
    </section>
  )
}
