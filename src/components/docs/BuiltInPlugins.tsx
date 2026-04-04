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
    <section className="section-padding border-t border-white/5">
      <div className="section-inner">
        <h2 className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b] mb-8">
          Supported platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <div
              key={platform.name}
              className={`reveal card-hover reveal-delay-${i + 1} relative p-6 bg-[#0f0f0f] border border-white/8 hover:border-[rgba(255,107,43,0.35)] transition-colors overflow-hidden`}
              style={{ borderRadius: '2px' }}
            >
              {/* Live badge */}
              <div className="absolute top-3 right-3">
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: 'rgba(34,197,94,0.15)',
                    color: '#4ade80',
                    border: '1px solid rgba(34,197,94,0.25)',
                  }}
                >
                  Live
                </span>
              </div>

              {/* Faded background abbreviation */}
              <span
                className="absolute bottom-2 right-3 font-mono font-bold text-white leading-none select-none pointer-events-none"
                style={{ fontSize: '4rem', opacity: 0.04 }}
                aria-hidden
              >
                {platform.abbr}
              </span>

              <h3 className="font-fraunces font-semibold text-white text-lg mb-2 relative z-10">
                {platform.name}
              </h3>
              <p className="font-sans text-[#9ca3af] text-[15px] leading-relaxed relative z-10">
                {platform.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
