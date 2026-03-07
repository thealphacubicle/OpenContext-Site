interface DocsHeroProps {
  githubUrl: string
}

export function DocsHero({ githubUrl }: DocsHeroProps) {
  const quickstartUrl = `${githubUrl}#readme`

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center py-24 md:py-32">
      <div className="section-inner flex-1 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-tight mb-6 animate-fade-up">
            Make civic data{' '}
            <em className="font-fraunces italic text-orange">accessible</em> and{' '}
            <em className="font-fraunces italic text-orange">contextualized</em>.
          </h1>
          <p className="font-sans text-muted text-lg leading-relaxed mb-10 animate-fade-up-delay-1">
            OpenContext is an open-source MCP server framework that sits between AI assistants and your
            government&apos;s civic data systems. Configure it once, and AI can query real datasets — open data
            portals, 311 systems, transit feeds — through a standardized protocol layer.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-navy text-cream text-sm font-mono font-medium uppercase tracking-wider no-underline transition-colors hover:bg-orange"
              style={{ borderRadius: '2px' }}
            >
              Fork the repo
            </a>
            <a
              href={quickstartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-navy text-navy text-sm font-mono font-medium uppercase tracking-wider no-underline transition-colors hover:bg-navy hover:text-cream"
              style={{ borderRadius: '2px' }}
            >
              Read the quickstart
            </a>
          </div>
        </div>
      </div>
      <a
        href="#core-constraint"
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
