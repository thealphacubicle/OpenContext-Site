export function McpConnectionHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center bg-grid overflow-hidden border-b border-white/5">
      {/* Animated orbs */}
      <div
        className="orb-animate pointer-events-none absolute"
        style={{
          top: '-10%',
          left: '-8%',
          width: '55vw',
          height: '55vw',
          maxWidth: '700px',
          maxHeight: '700px',
          background: 'radial-gradient(ellipse, rgba(255,107,43,0.12) 0%, transparent 70%)',
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
          background: 'radial-gradient(ellipse, rgba(255,107,43,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        aria-hidden
      />

      {/* Top center radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,107,43,0.08) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      <div className="section-inner relative z-10 py-20 md:py-24">
        {/* Live badge */}
        <div className="animate-fade-up flex justify-center md:justify-start mb-8">
          <span
            className="inline-flex items-center gap-2.5 px-4 py-2 font-mono text-xs tracking-widest uppercase"
            style={{
              border: '1px solid rgba(255,107,43,0.25)',
              background: 'rgba(255,107,43,0.06)',
              borderRadius: '100px',
              color: '#ff6b2b',
            }}
          >
            {/* Pulsing dot */}
            <span className="relative flex items-center justify-center w-2 h-2">
              <span
                className="animate-ping absolute inline-flex w-full h-full rounded-full"
                style={{ backgroundColor: 'rgba(255,107,43,0.5)' }}
              />
              <span
                className="relative inline-flex rounded-full w-2 h-2"
                style={{ backgroundColor: '#ff6b2b' }}
              />
            </span>
            Live in 15 minutes
          </span>
        </div>

        {/* Main heading */}
        <div className="animate-fade-up-delay-1 text-center md:text-left">
          <h1 className="font-fraunces font-light leading-[1.08] tracking-tight mb-6">
            <span
              className="block text-white"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              Your city's data,
            </span>
            <span
              className="block text-gradient"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              talking to Claude.
            </span>
          </h1>
          <p
            className="font-sans text-[#9ca3af] leading-relaxed max-w-xl mx-auto md:mx-0"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          >
            No coding experience needed. Follow seven simple steps and give Claude direct access
            to your open data portal.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-up-delay-2 flex flex-wrap items-center gap-4 mt-10 justify-center md:justify-start">
          <a
            href="https://github.com/thealphacubicle/OpenContext"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine pulse-glow inline-flex items-center gap-2 px-7 py-3.5 font-sans font-semibold text-white text-sm transition-all"
            style={{
              background: '#ff6b2b',
              borderRadius: '3px',
              letterSpacing: '0.01em',
            }}
          >
            Start on GitHub
            <span aria-hidden>→</span>
          </a>
          <a
            href="#steps"
            className="inline-flex items-center gap-2 px-7 py-3.5 font-sans font-semibold text-white text-sm transition-all hover:border-[rgba(255,107,43,0.5)] hover:text-[#ff6b2b]"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '3px',
              letterSpacing: '0.01em',
            }}
          >
            See the steps
            <span aria-hidden>↓</span>
          </a>
        </div>

        {/* Prerequisites pills */}
        <div className="animate-fade-up-delay-2 mt-12 flex flex-wrap gap-2 justify-center md:justify-start">
          <span
            className="font-mono text-xs text-[#6b7280] mr-1 self-center"
            style={{ letterSpacing: '0.05em' }}
          >
            You'll need:
          </span>
          {['Python 3.11+', 'AWS credentials', 'Terraform ≥ 1.0', 'Your portal URL'].map(
            (pill) => (
              <span
                key={pill}
                className="font-mono text-xs text-[#9ca3af] px-3 py-1.5"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '3px',
                }}
              >
                {pill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(5,5,5,0.8))',
        }}
        aria-hidden
      />
    </section>
  )
}
