const steps = [
  {
    num: '01',
    title: 'Your city has data',
    desc: 'It lives in a portal your team already manages — CKAN, Socrata, or ArcGIS.',
  },
  {
    num: '02',
    title: 'OpenContext wraps it',
    desc: 'Fork the repo, edit one config file, and deploy to your cloud in minutes.',
  },
  {
    num: '03',
    title: 'AI can now read it',
    desc: 'Any AI assistant connected to OpenContext can query your data in plain English.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-12">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <span
                className="block font-fraunces text-4xl md:text-5xl font-light leading-none text-[var(--border)] mb-4"
                aria-hidden
              >
                {step.num}
              </span>
              <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">{step.title}</h3>
              <p className="font-sans text-muted text-[15px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
