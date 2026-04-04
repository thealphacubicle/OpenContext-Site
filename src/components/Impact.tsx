const stats = [
  { value: '100+', label: 'datasets made AI-accessible' },
  { value: '300%', label: 'improvement in employee productivity' },
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
      className="section-padding border-t border-white/5 relative overflow-hidden"
    >
      {/* Subtle orange glow at top */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,107,43,0.4), transparent)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,107,43,0.07) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="section-inner relative z-10">
        {/* Two-line heading */}
        <div className="mb-12">
          <p className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b]">
            Trusted by
          </p>
          <p className="reveal reveal-delay-1 font-fraunces text-3xl text-white font-light">
            civic innovators.
          </p>
        </div>

        {/* Testimonials grid — all 3 at once */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={t.org}
              className={`reveal card-hover reveal-delay-${i + 1} p-6 bg-[#0f0f0f] border border-white/8 flex flex-col`}
              style={{ borderRadius: '2px', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              {/* Org name + badge */}
              <div className="flex items-center gap-2 flex-wrap mb-4">
                <span className="font-mono text-sm font-medium text-[#ff6b2b] uppercase tracking-wider">
                  {t.org}
                </span>
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255,107,43,0.12)',
                    color: '#ff6b2b',
                    border: '1px solid rgba(255,107,43,0.25)',
                  }}
                >
                  {t.badge}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-fraunces text-base font-light text-white leading-relaxed flex-1 mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <p className="font-sans text-[#6b7280] text-xs leading-relaxed">{t.attribution}</p>
            </div>
          ))}
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="p-6 bg-[#0f0f0f] border border-white/8 text-center"
              style={{ borderRadius: '2px' }}
            >
              <p className="font-fraunces text-3xl md:text-4xl font-light text-white mb-2">
                {stat.value}
              </p>
              <p className="font-sans text-[#9ca3af] text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
