export function Vision() {
  return (
    <section id="vision" className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-10">
          The vision
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center">
          <p className="flex-1 font-sans text-muted text-lg leading-relaxed max-w-xl">
            Empowering city governments to make their open data available in the agentic era — so every
            municipality can put their data where AI assistants and residents can find it, query it, and act on it.
          </p>
          <div className="shrink-0 w-36 h-24 md:w-40 md:h-28 text-[var(--border)]" aria-hidden>
            <svg viewBox="0 0 200 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="140" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <circle cx="100" cy="70" r="8" fill="currentColor" opacity="0.5" />
              <circle cx="50" cy="40" r="4" fill="currentColor" opacity="0.4" />
              <circle cx="150" cy="50" r="4" fill="currentColor" opacity="0.4" />
              <circle cx="60" cy="100" r="4" fill="currentColor" opacity="0.4" />
              <circle cx="140" cy="95" r="4" fill="currentColor" opacity="0.4" />
              <line x1="100" y1="70" x2="50" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <line x1="100" y1="70" x2="150" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <line x1="100" y1="70" x2="60" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <line x1="100" y1="70" x2="140" y2="95" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
