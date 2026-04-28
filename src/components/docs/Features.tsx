const stroke = '#1871bd'
const fill = '#1871bd'

const features = [
  {
    title: 'Zero custom code for standard portals',
    description:
      'If your city uses CKAN, Socrata, or ArcGIS, you don\u2019t write integration code. Pick the plugin, point at your URL, deploy.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M11 4L7 14" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 6.5L1.5 9 4 11.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 6.5L16.5 9 14 11.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Live in 15 minutes',
    description:
      'Use the OpenContext CLI to setup, authenticate, and manage your MCP deployment. The goal is fork to working deployment in one session — not a quarter-long project.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="7.5" stroke={stroke} strokeWidth="1.5" />
        <path d="M9 5v4l2.5 2.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Works with standard AI clients',
    description:
      'Connect assistants that speak MCP over HTTP. Your deployed endpoint uses a familiar JSON-RPC pattern.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="2" fill={fill} />
        <circle cx="2.5" cy="5" r="1.5" stroke={stroke} strokeWidth="1.2" />
        <circle cx="15.5" cy="5" r="1.5" stroke={stroke} strokeWidth="1.2" />
        <circle cx="2.5" cy="13" r="1.5" stroke={stroke} strokeWidth="1.2" />
        <circle cx="15.5" cy="13" r="1.5" stroke={stroke} strokeWidth="1.2" />
        <line x1="4" y1="5.5" x2="7" y2="8" stroke={fill} strokeWidth="1" opacity="0.7" />
        <line x1="14" y1="5.5" x2="11" y2="8" stroke={fill} strokeWidth="1" opacity="0.7" />
        <line x1="4" y1="12.5" x2="7" y2="10" stroke={fill} strokeWidth="1" opacity="0.7" />
        <line x1="14" y1="12.5" x2="11" y2="10" stroke={fill} strokeWidth="1" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: 'Built for government scale',
    description:
      'One deployment per data source keeps operations clear. Teams run isolated stacks that scale and update without stepping on each other.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2" y="10" width="3" height="6" stroke={stroke} strokeWidth="1.2" />
        <rect x="7.5" y="7" width="3" height="9" stroke={stroke} strokeWidth="1.2" />
        <rect x="13" y="4" width="3" height="12" stroke={stroke} strokeWidth="1.2" />
        <line x1="1" y1="16" x2="17" y2="16" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function Features() {
  return (
    <section className="section-padding border-t border-line bg-surface">
      <div className="section-inner">
        <h2 className="reveal eyebrow text-xl md:text-2xl mb-8">Why it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal card-hover reveal-delay-${i + 1} p-6 bg-surface-muted border border-line hover:border-action/40 transition-colors group rounded-card shadow-card`}
            >
              <div
                className="flex items-center justify-center w-10 h-10 mb-4 rounded-cta border border-boston-optimistic/35 bg-action-muted text-boston-optimistic"
              >
                {feature.icon}
              </div>
              <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-2 group-hover:text-action transition-colors uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="font-sans text-ink-body text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
