const accent = '#1871bd'
const accentMuted = 'rgba(24, 113, 189, 0.35)'
const warmAccent = 'rgba(24, 113, 189, 0.15)'

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
    title: 'Your city\'s data portal',
    subtitle: 'CKAN · ArcGIS · Socrata',
    description:
      'Your city already hosts open datasets online. OpenContext works with common government platforms. Your existing catalog stays the source of truth.',
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
      'A lightweight bridge translates questions from AI into data portal queries, then returns results the assistant can use. Data moves only when needed for the question you asked.',
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
      'Once connected, the assistant searches datasets and answers in plain language. Ask how many potholes were reported last month and get an answer from live data.',
  },
]

export function ConnectionFlow() {
  return (
    <section className="py-16 md:py-24 border-t border-line bg-surface">
      <div className="section-inner">
        <p className="reveal eyebrow mb-4">How it connects</p>
        <h2 className="reveal font-heading font-extrabold text-2xl md:text-4xl text-boston-charles leading-tight mb-14 max-w-lg uppercase tracking-tight">
          Three pieces. One pipeline.
        </h2>

        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {nodes.map((node, i) => (
            <div key={node.step} className="flex flex-col md:flex-row items-stretch flex-1">
              <div
                className={`reveal reveal-delay-${i + 1} flex-1 flex flex-col p-6 md:p-8 bg-surface-muted border border-line rounded-card shadow-card`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-heading font-bold text-xs text-boston-optimistic flex-shrink-0 tracking-widest"
                  >
                    {node.step}
                  </span>
                  <span
                    className="flex items-center justify-center w-11 h-11 flex-shrink-0 text-boston-optimistic rounded-full border border-boston-optimistic/35"
                    style={{ backgroundColor: warmAccent }}
                  >
                    {node.icon}
                  </span>
                </div>

                <p className="font-heading font-extrabold text-boston-charles text-lg mb-1 leading-snug uppercase tracking-tight">
                  {node.title}
                </p>
                <p className="font-mono text-xs text-ink-muted mb-4">{node.subtitle}</p>
                <p className="font-sans text-ink-body text-sm leading-relaxed flex-1">
                  {node.description}
                </p>
              </div>

              {i < nodes.length - 1 && (
                <>
                  <div className="flex flex-col items-center py-3 md:hidden" aria-hidden>
                    <div style={{ width: '2px', height: '32px', background: accentMuted }} />
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 1L5 7L9 1" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                    </svg>
                  </div>

                  <div className="hidden md:flex items-center flex-shrink-0 px-3" aria-hidden>
                    <div style={{ width: '40px', height: '2px', background: accentMuted }} />
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" style={{ marginLeft: '-1px' }}>
                      <path d="M1 1L7 5L1 9" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-4 font-sans text-xs text-ink-muted mt-10 max-w-md leading-relaxed">
          OpenContext is read-only at the portal: it queries public data. It does not write, edit, or delete catalog
          records.
        </p>
      </div>
    </section>
  )
}
