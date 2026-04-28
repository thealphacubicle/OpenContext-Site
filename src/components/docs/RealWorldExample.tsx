interface RealWorldExampleProps {
  githubUrl: string
}

const exampleQueries = [
  'How many potholes in Dorchester last month?',
  'Show me parks in ZIP code 02134',
  'What datasets cover the T system?',
]

export function RealWorldExample({ githubUrl }: RealWorldExampleProps) {
  const examplesUrl = `${githubUrl}/tree/main/examples`

  return (
    <section className="section-padding border-t border-line bg-surface-muted">
      <div className="section-inner">
        <h2 className="reveal eyebrow text-xl md:text-2xl mb-8">Real-world example</h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="reveal flex-1 md:basis-[58%]">
            <div className="p-6 md:p-8 bg-surface border border-line h-full rounded-card shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-heading font-bold text-xs text-boston-charles uppercase tracking-wider">
                  City of Boston
                </span>
              </div>
              <p className="font-sans text-ink-body text-base leading-relaxed mb-6">
                Boston&apos;s open data team uses this pattern: point OpenContext at CKAN, deploy, validate. The same
                workflow scales to other CKAN cities without fork-specific glue code.
              </p>
              <a
                href={examplesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View examples in repo
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 shrink-0 md:basis-[38%] w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-4">
              Example AI queries
            </p>
            <ul className="space-y-3">
              {exampleQueries.map((query) => (
                <li
                  key={query}
                  className="flex items-start gap-3 border-l-2 border-action/35 pl-3"
                >
                  <span className="shrink-0 font-mono text-sm font-bold mt-px text-action" aria-hidden>
                    ?
                  </span>
                  <span className="font-mono text-xs leading-relaxed text-ink-body bg-surface-muted border border-line px-2.5 py-1.5 rounded-cta block">
                    {query}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
