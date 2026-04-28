const steps = [
  {
    num: '01',
    title: 'Your city has data',
    desc: 'It lives in a portal your team already manages — CKAN, Socrata, or ArcGIS.',
  },
  {
    num: '02',
    title: 'OpenContext wraps it',
    desc: 'Fork the repo. Use the OpenContext CLI to setup, authenticate, and manage your MCP deployment. Go live in minutes.',
  },
  {
    num: '03',
    title: 'AI can now read it',
    desc: 'Any AI assistant connected to OpenContext can query your data in plain English.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="reveal section-padding border-t border-line bg-surface-muted">
      <div className="section-inner">
        <h2 className="reveal eyebrow text-xl md:text-2xl mb-12">How it works</h2>

        <div className="flex flex-col md:flex-row md:items-stretch gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex md:flex-1 flex-col md:flex-row items-stretch">
              <div
                className={`reveal card-hover reveal-delay-${i + 1} relative flex-1 p-8 bg-surface border border-line transition-colors hover:border-action rounded-card group overflow-hidden shadow-card`}
              >
                <div
                  className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out bg-boston-optimistic"
                  aria-hidden
                />

                <span
                  className="absolute top-2 right-3 font-mono font-bold leading-none text-boston-charles select-none pointer-events-none"
                  style={{ fontSize: '5rem', opacity: 0.06 }}
                  aria-hidden
                >
                  {step.num}
                </span>

                <span
                  className="block font-heading font-bold leading-none text-boston-optimistic mb-4 opacity-50 group-hover:opacity-90 transition-all duration-500 text-2xl"
                  aria-hidden
                >
                  {step.num}
                </span>

                <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-3 relative z-10 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-ink-body text-[15px] leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="flex items-center justify-center md:w-10 py-4 md:py-0 shrink-0">
                  <span
                    className="font-mono font-light md:hidden text-action opacity-70"
                    style={{ fontSize: '1.2rem' }}
                    aria-hidden
                  >
                    ↓
                  </span>
                  <span
                    className="font-mono font-light hidden md:block text-action opacity-70"
                    style={{ fontSize: '1.4rem' }}
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
