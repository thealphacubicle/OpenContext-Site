interface HeroProps {
  githubUrl: string
}

export function Hero({ githubUrl }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex flex-col items-center py-16 md:py-24 lg:py-32 bg-grid bg-surface-muted overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 55% at 50% 0%, rgba(24, 113, 189, 0.12) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      <div
        className="orb-animate pointer-events-none absolute opacity-90"
        style={{
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'rgba(24, 113, 189, 0.12)',
          filter: 'blur(72px)',
          top: '-12%',
          left: '-8%',
        }}
        aria-hidden
      />
      <div
        className="orb-animate-2 pointer-events-none absolute opacity-80"
        style={{
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'rgba(9, 31, 47, 0.08)',
          filter: 'blur(64px)',
          bottom: '8%',
          right: '-6%',
        }}
        aria-hidden
      />

      <div className="section-inner flex-1 flex items-center relative z-10">
        <div className="max-w-2xl">
          <p className="reveal eyebrow mb-5 animate-fade-up">
            Open source MCP · Civic infrastructure
          </p>

          <h1 className="reveal reveal-delay-1 font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-boston-charles leading-[1.08] mb-6 animate-fade-up-delay-1 tracking-tight uppercase">
            AI that speaks your city&apos;s{' '}
            <em className="inline-block font-sans italic font-semibold normal-case text-gradient">infrastructure</em>
          </h1>

          <p className="reveal reveal-delay-2 font-sans text-ink-body text-lg leading-relaxed mb-10 max-w-xl animate-fade-up-delay-2">
            OpenContext connects government open data to AI assistants. Residents and analysts ask questions in plain language. Deploy quickly. Boston uses this pattern for open data — other cities can too.
          </p>

          <div className="reveal reveal-delay-3 animate-fade-up-delay-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-shine"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <a
        href="#how-it-works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-boston-blueMuted hover:text-action transition-colors animate-pulse-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-full"
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
          aria-hidden
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
