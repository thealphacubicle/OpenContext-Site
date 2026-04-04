const features = [
  {
    title: 'Zero custom code for standard portals',
    description:
      'If your city uses CKAN, Socrata, or ArcGIS, you don\u2019t write a single line of code. Pick the matching plugin, point it at your URL, and you\u2019re done.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M11 4L7 14" stroke="#ff6b2b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 6.5L1.5 9 4 11.5" stroke="#ff6b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 6.5L16.5 9 14 11.5" stroke="#ff6b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Live in 15 minutes',
    description:
      'One config file, one deploy command. OpenContext is designed to go from fork to working deployment in a single afternoon \u2014 not a sprint.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="7.5" stroke="#ff6b2b" strokeWidth="1.5" />
        <path d="M9 5v4l2.5 2.5" stroke="#ff6b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Works with any AI assistant',
    description:
      'Connect Claude, Gemini, or any HTTP client. Your deployed endpoint speaks a standard protocol that every major AI assistant already understands.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="2" fill="#ff6b2b" />
        <circle cx="2.5" cy="5" r="1.5" stroke="#ff6b2b" strokeWidth="1.2" />
        <circle cx="15.5" cy="5" r="1.5" stroke="#ff6b2b" strokeWidth="1.2" />
        <circle cx="2.5" cy="13" r="1.5" stroke="#ff6b2b" strokeWidth="1.2" />
        <circle cx="15.5" cy="13" r="1.5" stroke="#ff6b2b" strokeWidth="1.2" />
        <line x1="4" y1="5.5" x2="7" y2="8" stroke="#ff6b2b" strokeWidth="1" opacity="0.7" />
        <line x1="14" y1="5.5" x2="11" y2="8" stroke="#ff6b2b" strokeWidth="1" opacity="0.7" />
        <line x1="4" y1="12.5" x2="7" y2="10" stroke="#ff6b2b" strokeWidth="1" opacity="0.7" />
        <line x1="14" y1="12.5" x2="11" y2="10" stroke="#ff6b2b" strokeWidth="1" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: 'Built for government scale',
    description:
      'Designed for real civic deployments, starting with Boston. Independent deployments per data source mean each one scales, fails, and updates on its own.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2" y="10" width="3" height="6" stroke="#ff6b2b" strokeWidth="1.2" />
        <rect x="7.5" y="7" width="3" height="9" stroke="#ff6b2b" strokeWidth="1.2" />
        <rect x="13" y="4" width="3" height="12" stroke="#ff6b2b" strokeWidth="1.2" />
        <line x1="1" y1="16" x2="17" y2="16" stroke="#ff6b2b" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function Features() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="section-inner">
        <h2 className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b] mb-8">
          Why it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal card-hover reveal-delay-${i + 1} p-6 bg-[#0f0f0f] border border-white/8 hover:border-[rgba(255,107,43,0.3)] transition-colors group`}
              style={{ borderRadius: '2px' }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-10 h-10 mb-4"
                style={{
                  backgroundColor: 'rgba(255,107,43,0.08)',
                  border: '1px solid rgba(255,107,43,0.2)',
                  borderRadius: '2px',
                }}
              >
                {feature.icon}
              </div>
              <h3 className="font-fraunces font-semibold text-white text-lg mb-2 group-hover:text-[#ff6b2b] transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans text-[#9ca3af] text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
