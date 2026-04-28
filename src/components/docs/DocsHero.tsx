interface DocsHeroProps {
  githubUrl: string
}

export function DocsHero({ githubUrl }: DocsHeroProps) {
  return (
    <section className="relative min-h-[65vh] flex flex-col items-center py-16 md:py-20 bg-grid bg-surface-muted overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(24, 113, 189, 0.14) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div
        className="orb-animate pointer-events-none absolute"
        style={{
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'rgba(24, 113, 189, 0.12)',
          filter: 'blur(72px)',
          top: '-15%',
          left: '-8%',
        }}
        aria-hidden
      />

      <div
        className="orb-animate-2 pointer-events-none absolute"
        style={{
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: 'rgba(9, 31, 47, 0.06)',
          filter: 'blur(64px)',
          bottom: '5%',
          right: '-8%',
        }}
        aria-hidden
      />

      <div className="section-inner flex-1 flex items-center relative z-10">
        <div className="max-w-xl">
          <div className="mb-6 animate-fade-up">
            <span className="inline-block font-heading font-bold text-xs uppercase tracking-widest px-3 py-1.5 text-boston-charles border border-boston-optimistic/40 bg-action-muted rounded-full">
              Documentation
            </span>
          </div>

          <h1 className="reveal font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-boston-charles leading-tight mb-6 animate-fade-up-delay-1 uppercase tracking-tight">
            Your city&apos;s data, accessible to AI in{' '}
            <em className="font-sans italic font-semibold normal-case text-boston-optimistic">15 minutes</em>.
          </h1>
          <p className="reveal reveal-delay-1 font-sans text-ink-body text-lg leading-relaxed mb-10 animate-fade-up-delay-2">
            OpenContext connects your open data to AI assistants. Fork the repo. Use the OpenContext CLI to setup,
            authenticate, and manage your MCP deployment. No custom integration project.
          </p>
          <div className="reveal reveal-delay-2 flex flex-wrap gap-4 mb-10 animate-fade-up-delay-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-shine">
              Fork the repo
            </a>
          </div>
        </div>
      </div>

      <a
        href="#core-constraint"
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
