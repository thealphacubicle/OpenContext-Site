interface DocsHeroProps {
  githubUrl: string
}

export function DocsHero({ githubUrl }: DocsHeroProps) {
  return (
    <section className="relative min-h-[65vh] flex flex-col items-center py-16 md:py-20 bg-grid overflow-hidden">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,132,26,0.1) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Accent orb */}
      <div
        className="orb-animate pointer-events-none absolute"
        style={{
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'rgba(232,132,26,0.14)',
          filter: 'blur(80px)',
          top: '-15%',
          left: '-8%',
        }}
        aria-hidden
      />

      {/* Teal orb */}
      <div
        className="orb-animate-2 pointer-events-none absolute"
        style={{
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: 'rgba(29,158,117,0.1)',
          filter: 'blur(80px)',
          bottom: '5%',
          right: '-8%',
        }}
        aria-hidden
      />

      <div className="section-inner flex-1 flex items-center relative z-10">
        <div className="max-w-xl">
          {/* Pill badge */}
          <div className="mb-6 animate-fade-up">
            <span
              className="inline-block font-mono text-xs uppercase tracking-widest px-3 py-1.5"
              style={{
                color: '#E8841A',
                border: '1px solid rgba(232,132,26,0.45)',
                backgroundColor: 'rgba(232,132,26,0.12)',
                borderRadius: '99px',
              }}
            >
              Documentation
            </span>
          </div>

          <h1 className="reveal font-fraunces text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 animate-fade-up-delay-1">
            Your city&apos;s data, accessible to AI in{' '}
            <em className="font-fraunces italic text-[#E8841A]">15 minutes</em>.
          </h1>
          <p className="reveal reveal-delay-1 font-sans text-[#9ca3af] text-lg leading-relaxed mb-10 animate-fade-up-delay-2">
            OpenContext connects your government&apos;s open data to AI assistants — no custom code, no long
            integrations. Fork, configure one file, deploy.
          </p>
          <div className="reveal reveal-delay-2 flex flex-wrap gap-4 mb-10 animate-fade-up-delay-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#2D5A27] text-white text-sm font-mono font-medium uppercase tracking-wider no-underline transition-opacity hover:opacity-90"
              style={{ borderRadius: '2px' }}
            >
              Fork the repo
            </a>
          </div>

        </div>
      </div>

      <a
        href="#core-constraint"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#1D9E75] transition-colors animate-pulse-bounce"
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
