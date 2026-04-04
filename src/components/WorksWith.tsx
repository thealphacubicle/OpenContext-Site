const dataPlatforms = [
  {
    name: 'CKAN',
    live: true,
    description: 'OpenContext connects to CKAN APIs to expose datasets, resources, and metadata so AI assistants can discover and query your open data catalog.',
  },
  {
    name: 'Socrata',
    live: true,
    description: 'OpenContext integrates with Socrata-powered portals to translate SODA API responses into natural language, making city datasets accessible to AI tools.',
  },
  {
    name: 'ArcGIS',
    live: true,
    description: 'OpenContext connects to ArcGIS REST APIs to expose geospatial layers and feature services so AI assistants can query location-based civic data naturally.',
  },
]

const cloudProviders = [
  {
    name: 'AWS',
    live: true,
    description: 'Deploy OpenContext on AWS Lambda and API Gateway for a serverless, scalable setup. Connect your data portal and go live in minutes.',
  },
  { name: 'GCP', live: false },
  { name: 'Azure', live: false },
]

function PlatformCard({
  name,
  live,
  description,
  revealDelay,
}: {
  name: string
  live: boolean
  description?: string
  revealDelay?: number
}) {
  const delayClass = revealDelay ? `reveal-delay-${revealDelay}` : ''

  if (!live) {
    return (
      <div
        className={`reveal ${delayClass} relative flex min-h-[120px] items-center justify-between px-6 py-5 border border-white/8 bg-[#0f0f0f] transition-colors hover:border-white/20`}
        style={{ borderRadius: '2px' }}
      >
        <span className="font-mono text-lg font-medium text-[#6b7280]">{name}</span>
        <span
          className="font-mono text-xs px-2 py-1 rounded-full"
          style={{ backgroundColor: '#1a1a1a', color: '#6b7280' }}
        >
          Coming soon
        </span>
      </div>
    )
  }

  return (
    <div className={`reveal ${delayClass} flip-card-container relative h-[120px]`}>
      <div className="flip-card-inner relative h-full w-full">
        {/* Front */}
        <div
          className="flip-card-front absolute inset-0 flex items-center justify-between border border-white/8 bg-[#0f0f0f] px-6 py-5 text-white"
          style={{ borderRadius: '2px' }}
        >
          <span className="font-mono text-lg font-medium">{name}</span>
          <span
            className="font-mono text-xs px-2 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              color: '#22c55e',
              border: '1px solid rgba(34, 197, 94, 0.25)',
            }}
          >
            Live
          </span>
        </div>
        {/* Back */}
        <div
          className="flip-card-back flip-card-front absolute inset-0 flex items-center overflow-y-auto px-6 py-5"
          style={{
            backgroundColor: '#ff6b2b',
            borderRadius: '2px',
            minHeight: 120,
          }}
        >
          <p className="font-sans text-sm leading-relaxed text-black font-medium">
            {description ?? ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export function WorksWith() {
  return (
    <section id="works-with" className="section-padding border-t border-white/5">
      <div className="section-inner">
        <h2 className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b] mb-3">
          Works with
        </h2>
        <p className="reveal font-sans text-[#9ca3af] text-sm mb-10">
          Hover to learn more about each integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3
              className="reveal font-mono text-base md:text-lg font-medium uppercase tracking-wider text-[#9ca3af] border-b pb-3 mb-5"
              style={{ borderColor: 'rgba(255,107,43,0.2)' }}
            >
              Data platforms
            </h3>
            <div className="flex flex-col gap-3">
              {dataPlatforms.map((p, i) => (
                <PlatformCard
                  key={p.name}
                  name={p.name}
                  live={p.live}
                  description={'description' in p ? p.description : undefined}
                  revealDelay={i + 1}
                />
              ))}
            </div>
          </div>
          <div>
            <h3
              className="reveal font-mono text-base md:text-lg font-medium uppercase tracking-wider text-[#9ca3af] border-b pb-3 mb-5"
              style={{ borderColor: 'rgba(255,107,43,0.2)' }}
            >
              Cloud providers
            </h3>
            <div className="flex flex-col gap-3">
              {cloudProviders.map((p, i) => (
                <PlatformCard
                  key={p.name}
                  name={p.name}
                  live={p.live}
                  description={'description' in p ? p.description : undefined}
                  revealDelay={i + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
