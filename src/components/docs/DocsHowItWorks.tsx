const steps = [
  {
    num: '01',
    title: 'Fork the repo',
    description: 'Copy OpenContext in one click on GitHub.',
  },
  {
    num: '02',
    title: 'Use the OpenContext CLI',
    description:
      'Use the OpenContext CLI to setup, authenticate, and manage your MCP deployment.',
  },
  {
    num: '03',
    title: 'Run the deploy script',
    description: 'One command pushes it live to your cloud.',
  },
  {
    num: '04',
    title: 'Ask questions in plain English',
    description: 'Your AI assistant can now query real city data.',
  },
]

export function DocsHowItWorks() {
  return (
    <section id="how-it-works" className="section-padding border-t border-line bg-surface-muted">
      <div className="section-inner">
        <h2 className="reveal eyebrow text-xl md:text-2xl mb-10">How it works</h2>
        <div className="relative">
          <div
            className="timeline-line absolute left-4 top-4 bottom-4 w-px hidden md:block"
            aria-hidden
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1} relative flex gap-6 md:gap-10 pb-10 last:pb-0`}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="flex items-center justify-center w-8 h-8 font-mono text-sm font-semibold relative z-10 bg-surface text-action border border-action rounded-full"
                  >
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2 md:hidden"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(24,113,189,0.45) 0%, rgba(24,113,189,0.15) 100%)',
                        minHeight: '2rem',
                      }}
                      aria-hidden
                    />
                  )}
                </div>

                <div className="flex-1 pt-1 pb-4">
                  <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-1 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-ink-body text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
