interface HeroProps {
  githubUrl: string
}

export function Hero({ githubUrl }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex flex-col items-center py-16 md:py-24 lg:py-32 bg-grid overflow-hidden">
      {/* Radial orange glow at top center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,43,0.08) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Orange orb */}
      <div
        className="orb-animate pointer-events-none absolute"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(255,107,43,0.12)',
          filter: 'blur(80px)',
          top: '-10%',
          left: '-5%',
        }}
        aria-hidden
      />

      {/* Blue orb */}
      <div
        className="orb-animate-2 pointer-events-none absolute"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(59,130,246,0.08)',
          filter: 'blur(80px)',
          bottom: '10%',
          right: '-5%',
        }}
        aria-hidden
      />

      <div className="section-inner flex-1 flex items-center relative z-10">
        <div className="max-w-2xl">
          {/* Mono label */}
          <p className="reveal font-mono text-sm uppercase tracking-widest text-[#ff6b2b] mb-6 animate-fade-up">
            Open Source MCP Framework · Civic Infrastructure
          </p>

          <h1 className="reveal reveal-delay-1 font-fraunces text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6 animate-fade-up-delay-1">
            AI that speaks your city's{' '}
            <em className="font-fraunces italic text-gradient">infrastructure</em>
          </h1>

          <p className="reveal reveal-delay-2 font-sans text-[#9ca3af] text-lg leading-relaxed mb-10 max-w-xl animate-fade-up-delay-2">
            OpenContext connects government open data portals to AI assistants — so residents,
            analysts, and AI can query real city data in plain English. Deploy in minutes, not months.
            Powering Boston's open data infrastructure — and cities worldwide.
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-block px-6 py-3 bg-[#ff6b2b] text-black text-sm font-mono font-medium uppercase tracking-wider no-underline transition-opacity hover:opacity-90"
              style={{ borderRadius: '2px' }}
            >
              View on GitHub
            </a>
            <a
              href="#how-it-works"
              className="inline-block px-6 py-3 border border-white/20 text-white text-sm font-mono font-medium uppercase tracking-wider no-underline transition-colors hover:bg-white/5"
              style={{ borderRadius: '2px' }}
            >
              See how it works
            </a>
          </div>

        </div>
      </div>

      <a
        href="#how-it-works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#ff6b2b] transition-colors animate-pulse-bounce"
        aria-label="Scroll to content"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
