const platforms = [
  {
    name: 'CKAN',
    abbr: 'CK',
    benefit: 'Used by hundreds of governments worldwide. No code required.',
  },
  {
    name: 'Socrata',
    abbr: 'SO',
    benefit: 'Drop-in support for Socrata-powered city portals.',
  },
  {
    name: 'ArcGIS',
    abbr: 'AR',
    benefit: 'Query geospatial and feature data through natural language.',
  },
]

export function BuiltInPlugins() {
  return (
    <section className="section-padding border-t border-line bg-surface">
      <div className="section-inner">
        <h2 className="reveal eyebrow text-xl md:text-2xl mb-8">Supported platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <div
              key={platform.name}
              className={`reveal card-hover reveal-delay-${i + 1} relative p-6 bg-surface-muted border border-line hover:border-action/40 transition-colors overflow-hidden rounded-card shadow-card`}
            >
              <div className="absolute top-3 right-3">
                <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-action-muted text-action border border-action/25">
                  Live
                </span>
              </div>

              <span
                className="absolute bottom-2 right-3 font-mono font-bold text-boston-charles leading-none select-none pointer-events-none"
                style={{ fontSize: '4rem', opacity: 0.06 }}
                aria-hidden
              >
                {platform.abbr}
              </span>

              <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-2 relative z-10 uppercase tracking-tight">
                {platform.name}
              </h3>
              <p className="font-sans text-ink-body text-[15px] leading-relaxed relative z-10">
                {platform.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
