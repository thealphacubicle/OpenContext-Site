const stats = [
  { value: '100+', label: 'datasets made AI-accessible' },
  { value: '~4x', label: 'faster MCP deployment to production' },
  { value: '< 15 min', label: 'average setup time' },
]

const testimonials = [
  {
    org: 'City of Boston',
    badge: 'Primary partner',
    quote:
      'OpenContext has transformed how our teams interact with city data. Getting answers that used to take days now takes seconds.',
    attribution: 'City of Boston',
  },
  {
    org: 'Cyvl.ai',
    badge: 'Early adopter',
    quote:
      'Integrating OpenContext into our workflow was seamless. Our team can now query and analyze data without any of the friction we had before.',
    attribution: 'Cyvl.ai',
  },
]

export function Impact() {
  return (
    <section
      id="impact"
      className="section-padding border-t border-line relative overflow-hidden bg-surface-muted"
    >
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-boston-optimistic/40 to-transparent"
        aria-hidden
      />

      <div className="section-inner relative z-10">
        <div className="mb-12">
          <p className="reveal eyebrow text-base md:text-lg mb-2">Trusted by</p>
          <p className="reveal reveal-delay-1 font-heading font-extrabold text-3xl md:text-4xl text-boston-charles uppercase tracking-tight">
            civic innovators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={t.org}
              className={`reveal card-hover reveal-delay-${i + 1} p-6 bg-surface border border-line flex flex-col rounded-card shadow-card`}
            >
              <div className="flex items-center gap-2 flex-wrap mb-4">
                <span className="font-heading text-xs font-bold text-boston-charles uppercase tracking-wider">
                  {t.org}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-action-muted text-action border border-action/25">
                  {t.badge}
                </span>
              </div>

              <blockquote className="font-sans text-base text-ink-body leading-relaxed flex-1 mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <p className="font-sans text-ink-muted text-xs leading-relaxed">{t.attribution}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="p-6 bg-surface border border-line text-center rounded-card"
            >
              <p className="font-heading font-extrabold text-3xl md:text-4xl text-boston-charles mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="font-sans text-ink-body text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
