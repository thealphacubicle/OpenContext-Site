const steps = [
  {
    num: '01',
    title: 'Fork the repo',
    description: 'Copy OpenContext in one click on GitHub.',
  },
  {
    num: '02',
    title: 'Edit one config file',
    description: 'Set your portal\u2019s URL. That\u2019s it.',
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
    <section id="how-it-works" className="section-padding border-t border-white/5">
      <div className="section-inner">
        <h2 className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#E8841A] mb-10">
          How it works
        </h2>
        <div className="relative">
          {/* Vertical timeline line */}
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
                {/* Number circle */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="flex items-center justify-center w-8 h-8 font-mono text-sm font-medium relative z-10"
                    style={{
                      border: '1px solid rgba(29,158,117,0.6)',
                      color: '#1D9E75',
                      backgroundColor: '#050505',
                      borderRadius: '50%',
                    }}
                  >
                    {i + 1}
                  </div>
                  {/* Connecting line segment below (except last) */}
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2 md:hidden"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(29,158,117,0.45) 0%, rgba(29,158,117,0.15) 100%)',
                        minHeight: '2rem',
                      }}
                      aria-hidden
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-4">
                  <h3 className="font-fraunces font-semibold text-white text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[#9ca3af] text-[15px] leading-relaxed">
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
