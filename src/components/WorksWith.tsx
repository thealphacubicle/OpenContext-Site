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
  { name: 'ArcGIS', live: false },
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
}: {
  name: string
  live: boolean
  description?: string
}) {
  if (!live) {
    return (
      <div className="relative flex min-h-[120px] items-center justify-between px-6 py-5 rounded-lg border border-[var(--border)] bg-[var(--chip-muted)] text-[var(--chip-muted-text)] transition-colors hover:bg-orange hover:border-orange hover:text-cream">
        <span className="font-mono text-lg font-medium">{name}</span>
        <span className="font-mono text-sm italic opacity-80">Coming soon</span>
      </div>
    )
  }

  return (
    <div className="flip-card-container relative h-[120px]">
      <div className="flip-card-inner relative h-full w-full">
        {/* Front */}
        <div className="flip-card-front absolute inset-0 flex items-center justify-between rounded-lg border border-navy bg-navy px-6 py-5 text-cream">
          <span className="font-mono text-lg font-medium">{name}</span>
          <span className="font-mono text-sm text-orange/90">Supported</span>
        </div>
        {/* Back */}
        <div
          className="flip-card-back flip-card-front absolute inset-0 flex items-center overflow-y-auto rounded-lg border border-orange bg-navy px-6 py-5"
          style={{ minHeight: 120 }}
        >
          <p className="font-sans text-sm leading-relaxed text-cream/95">
            {description ?? ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export function WorksWith() {
  return (
    <section id="works-with" className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-10">
          Works with
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="font-mono text-base md:text-lg font-medium uppercase tracking-wider text-muted mb-5">
              Data platforms
            </h3>
            <div className="flex flex-col gap-3">
              {dataPlatforms.map((p) => (
                <PlatformCard
                  key={p.name}
                  name={p.name}
                  live={p.live}
                  description={'description' in p ? p.description : undefined}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-base md:text-lg font-medium uppercase tracking-wider text-muted mb-5">
              Cloud providers
            </h3>
            <div className="flex flex-col gap-3">
              {cloudProviders.map((p) => (
                <PlatformCard
                  key={p.name}
                  name={p.name}
                  live={p.live}
                  description={'description' in p ? p.description : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
