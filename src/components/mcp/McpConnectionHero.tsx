export function McpConnectionHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center bg-grid bg-surface-muted overflow-hidden border-b border-line">
      <div
        className="orb-animate pointer-events-none absolute"
        style={{
          top: '-10%',
          left: '-8%',
          width: '55vw',
          height: '55vw',
          maxWidth: '700px',
          maxHeight: '700px',
          background: 'radial-gradient(ellipse, rgba(24,113,189,0.14) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
        aria-hidden
      />
      <div
        className="orb-animate-2 pointer-events-none absolute"
        style={{
          bottom: '-15%',
          right: '-10%',
          width: '45vw',
          height: '45vw',
          maxWidth: '600px',
          maxHeight: '600px',
          background: 'radial-gradient(ellipse, rgba(9,31,47,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(24,113,189,0.12) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      <div className="section-inner relative z-10 py-20 md:py-24">
        <div className="animate-fade-up flex justify-center md:justify-start mb-8">
          <span
            className="inline-flex items-center gap-2.5 px-4 py-2 font-heading font-bold text-xs tracking-widest uppercase text-boston-charles border border-boston-optimistic/35 bg-action-muted rounded-full"
          >
            <span className="relative flex items-center justify-center w-2 h-2">
              <span
                className="animate-ping absolute inline-flex w-full h-full rounded-full bg-action/45"
              />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-action" />
            </span>
            Live in 15 minutes
          </span>
        </div>

        <div className="animate-fade-up-delay-1 text-center md:text-left">
          <h1 className="font-heading font-extrabold leading-[1.08] tracking-tight mb-6 uppercase text-boston-charles">
            <span className="block" style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}>
              Your city&apos;s data,
            </span>
            <span className="block text-gradient" style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}>
              talking to Claude
            </span>
          </h1>
          <p
            className="font-sans text-ink-body leading-relaxed max-w-xl mx-auto md:mx-0"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
          >
            No engineering backlog required. Follow seven clear steps and give Claude read access to your open data
            catalog through MCP.
          </p>
        </div>

        <div className="animate-fade-up-delay-2 flex flex-wrap items-center gap-4 mt-10 justify-center md:justify-start">
          <a
            href="https://github.com/thealphacubicle/OpenContext"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-shine inline-flex items-center gap-2"
          >
            Start on GitHub
            <span aria-hidden>→</span>
          </a>
          <a href="#steps" className="btn-secondary inline-flex items-center gap-2">
            See the steps
            <span aria-hidden>↓</span>
          </a>
        </div>

        <div className="animate-fade-up-delay-2 mt-12 flex flex-wrap gap-2 justify-center md:justify-start items-center">
          <span className="font-heading font-bold text-xs text-ink-muted uppercase tracking-wider mr-1">
            You&apos;ll need:
          </span>
          {['Python 3.11+', 'AWS credentials', 'Terraform ≥ 1.0', 'Your portal URL'].map(
            (pill) => (
              <span
                key={pill}
                className="font-mono text-xs text-ink-body px-3 py-1.5 border border-line bg-surface rounded-cta"
              >
                {pill}
              </span>
            )
          )}
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-surface-muted"
        aria-hidden
      />
    </section>
  )
}
