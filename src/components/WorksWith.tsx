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
        className={`reveal ${delayClass} relative flex min-h-[120px] items-center justify-between px-6 py-5 border border-line bg-surface-muted transition-colors hover:border-boston-blueMuted rounded-card`}
      >
        <span className="font-heading text-sm font-bold uppercase tracking-wider text-ink-muted">
          {name}
        </span>
        <span className="font-mono text-xs px-2 py-1 rounded-full bg-boston-grayWash text-ink-muted border border-line">
          Coming soon
        </span>
      </div>
    )
  }

  return (
    <>
      <div
        className={`reveal ${delayClass} md:hidden border border-line bg-surface px-5 py-4 rounded-card shadow-card`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-boston-charles">
            {name}
          </span>
          <span className="font-mono text-xs px-2 py-1 rounded-full bg-action-muted text-action border border-action/30">
            Live
          </span>
        </div>
        {description && (
          <p className="font-sans text-sm leading-relaxed text-ink-body">{description}</p>
        )}
      </div>

      <div className={`reveal ${delayClass} hidden md:block flip-card-container relative h-[120px]`}>
        <div className="flip-card-inner relative h-full w-full">
          <div
            className="flip-card-front absolute inset-0 flex items-center justify-between border border-line bg-surface px-6 py-5 text-boston-charles rounded-card shadow-card"
          >
            <span className="font-heading text-sm font-bold uppercase tracking-wider">{name}</span>
            <span className="font-mono text-xs px-2 py-1 rounded-full bg-action-muted text-action border border-action/30">
              Live
            </span>
          </div>
          <div
            className="flip-card-back flip-card-front absolute inset-0 flex items-center overflow-y-auto px-6 py-5 rounded-card"
            style={{
              backgroundColor: '#1871bd',
              minHeight: 120,
            }}
          >
            <p className="font-sans text-sm leading-relaxed text-white font-medium">
              {description ?? ''}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export function WorksWith() {
  return (
    <section id="works-with" className="section-padding border-t border-line bg-surface">
      <div className="section-inner">
        <h2 className="reveal eyebrow text-xl md:text-2xl mb-3">Works with</h2>
        <p className="reveal font-sans text-ink-body text-sm mb-10">
          Hover a card on desktop to read how each integration behaves.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="reveal font-heading text-sm md:text-base font-bold uppercase tracking-wider text-ink-muted border-b border-boston-optimistic/30 pb-3 mb-5">
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
            <h3 className="reveal font-heading text-sm md:text-base font-bold uppercase tracking-wider text-ink-muted border-b border-boston-optimistic/30 pb-3 mb-5">
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
