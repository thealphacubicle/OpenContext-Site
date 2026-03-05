interface HeroProps {
  githubUrl: string
}

export function Hero({ githubUrl }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center py-24 md:py-32">
      <div className="section-inner flex-1 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-tight mb-6 animate-fade-up">
            Let AI assistants talk to your{' '}
            <em className="font-fraunces italic text-orange">
              city's data
            </em>
            .
          </h1>
          <p className="font-sans text-muted text-lg leading-relaxed mb-10 animate-fade-up-delay-1">
            <span className="font-semibold text-navy animate-underline-reveal">
              OpenContext
            </span>{' '}
            connects government open data portals to AI tools — so residents, analysts, and AI assistants
            can query real city data in plain English.
          </p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-navy text-cream text-sm font-mono font-medium uppercase tracking-wider no-underline transition-colors hover:bg-orange animate-fade-up-delay-2"
            style={{ borderRadius: '2px' }}
          >
            View on GitHub
          </a>
        </div>
      </div>
      <a
        href="#how-it-works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy/60 hover:text-orange transition-colors animate-pulse-bounce"
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
