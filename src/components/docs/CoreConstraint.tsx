export function CoreConstraint() {
  return (
    <section id="core-constraint" className="section-padding border-t border-line bg-surface-muted">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="reveal flex-1 md:basis-[60%]">
            <h2 className="eyebrow text-lg md:text-xl mb-6">Built for simplicity</h2>
            <p className="font-heading font-extrabold text-2xl md:text-3xl text-boston-charles leading-tight mb-6 uppercase tracking-tight">
              One data source. One deployment. Everything stays predictable.
            </p>
            <p className="font-sans text-ink-body text-base leading-relaxed mb-6">
              Each OpenContext deployment connects to exactly one data source. Routing, plugins, and credentials stay
              scoped by design.
            </p>
            <p className="font-sans text-ink-body text-base leading-relaxed">
              Need multiple sources? Run multiple deployments — one per portal, each with a clear name. They scale and
              fail independently.
            </p>
          </div>

          <div className="reveal reveal-delay-2 shrink-0 md:basis-[38%] w-full">
            <div className="space-y-4">
              <div className="p-5 border border-action/30 bg-action-muted rounded-card">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <circle cx="7" cy="7" r="6.5" stroke="rgba(24,113,189,0.55)" strokeWidth="1" />
                    <path d="M4 7l2 2 4-4" stroke="#1871bd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-heading font-bold text-xs text-action uppercase tracking-widest">Recommended</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="font-mono text-xs px-3 py-2 text-boston-charles border border-line bg-surface rounded-cta">
                    OpenContext
                  </div>
                  <span className="font-mono text-sm text-action">→</span>
                  <div className="font-mono text-xs px-3 py-2 text-boston-charles border border-line bg-surface rounded-cta">
                    Your data portal
                  </div>
                </div>
                <p className="font-sans text-xs text-ink-muted mt-3">One deployment, one catalog. Simple operations.</p>
              </div>

              <div
                className="p-5 border border-accent-warm/25 bg-surface rounded-card opacity-90"
              >
                <div className="flex items-center gap-2 mb-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <circle cx="7" cy="7" r="6.5" stroke="rgba(251,77,66,0.45)" strokeWidth="1" />
                    <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#FB4D42" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="font-heading font-bold text-xs text-accent-warm uppercase tracking-widest">Avoid</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="font-mono text-xs px-3 py-2 text-ink-muted border border-line bg-surface-muted rounded-cta">
                    OpenContext
                  </div>
                  <span className="font-mono text-sm text-ink-muted/70">↔</span>
                  <div className="flex flex-col gap-1">
                    {['Portal A', 'Portal B', 'Portal C'].map((p) => (
                      <div
                        key={p}
                        className="font-mono text-xs px-2 py-1 text-ink-muted border border-line bg-surface rounded-cta"
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="font-sans text-xs text-ink-muted mt-3">Many sources in one process add needless coupling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
