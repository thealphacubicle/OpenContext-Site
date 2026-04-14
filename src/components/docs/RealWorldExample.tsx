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
    <section className="section-padding border-t border-white/5">
      <div className="section-inner">
        <h2 className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#E8841A] mb-8">
          Real-world example
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Left: text + button (60%) */}
          <div className="reveal flex-1 md:basis-[58%]">
            <div
              className="p-6 md:p-8 bg-[#0f0f0f] border border-white/8 h-full"
              style={{ borderRadius: '2px' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg" aria-hidden>&#127963;</span>
                <span className="font-mono text-sm text-[#E8841A] font-medium uppercase tracking-wider">
                  City of Boston
                </span>
              </div>
              <p className="font-sans text-[#9ca3af] text-base leading-relaxed mb-6">
                OpenContext powers Boston&apos;s open data portal. The pattern is simple: point it at your CKAN URL,
                deploy, done. No custom code.
              </p>
              <a
                href={examplesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#2D5A27] text-white text-sm font-mono font-medium uppercase tracking-wider no-underline transition-opacity hover:opacity-90"
                style={{ borderRadius: '2px' }}
              >
                View examples in repo
              </a>
            </div>
          </div>

          {/* Right: example queries (40%) */}
          <div className="reveal reveal-delay-2 shrink-0 md:basis-[38%] w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-[#6b7280] mb-4">
              Example AI queries
            </p>
            <ul className="space-y-3">
              {exampleQueries.map((query) => (
                <li
                  key={query}
                  className="flex items-start gap-3 border-l-2 pl-3"
                  style={{ borderColor: 'rgba(29,158,117,0.35)' }}
                >
                  {/* Orange question mark icon */}
                  <span
                    className="shrink-0 font-mono text-sm font-bold mt-px"
                    style={{ color: '#1D9E75' }}
                    aria-hidden
                  >
                    ?
                  </span>
                  <span
                    className="font-mono text-xs leading-relaxed"
                    style={{
                      color: '#9ca3af',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      padding: '6px 10px',
                      borderRadius: '2px',
                      display: 'block',
                    }}
                  >
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
