const steps = [
  {
    num: '01',
    title: 'Fork the repository with a meaningful name',
    developer: 'You fork the OpenContext repo and name it for your use case — e.g. Boston-OpenData-MCP.',
    system: 'You now have a copy of the framework ready to configure.',
    outcome: 'A named fork that reflects the data source it will expose.',
  },
  {
    num: '02',
    title: 'Configure exactly one plugin in the config file',
    developer: 'You edit the config file to point at your data source — base URL, credentials if needed.',
    system: 'The deploy script will validate that exactly one plugin is configured.',
    outcome: 'A valid configuration that passes the deploy check.',
  },
  {
    num: '03',
    title: 'Run the deploy script',
    developer: 'You run a single shell command. The script packages the code and deploys to your infrastructure.',
    system: 'The service provisions, deploys, and returns an endpoint URL.',
    outcome: 'An MCP endpoint URL ready to connect.',
  },
  {
    num: '04',
    title: 'Connect the endpoint URL to your AI assistant or application',
    developer: 'You connect through Claude connectors, Gemini CLI, or call it directly via HTTP from your application.',
    system: 'AI assistants can now query your civic data through the MCP protocol.',
    outcome: 'AI-ready civic data, queryable in plain English.',
  },
]

export function DocsHowItWorks() {
  return (
    <section id="how-it-works" className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-12">
          How it works
        </h2>
        <div className="space-y-12 md:space-y-16">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <span
                className="block font-fraunces text-4xl md:text-5xl font-light leading-none text-[var(--border)] mb-4"
                aria-hidden
              >
                {step.num}
              </span>
              <h3 className="font-fraunces font-semibold text-navy text-lg mb-3">{step.title}</h3>
              <div className="space-y-2 text-muted text-[15px] leading-relaxed">
                <p>
                  <span className="font-medium text-navy">You:</span> {step.developer}
                </p>
                <p>
                  <span className="font-medium text-navy">System:</span> {step.system}
                </p>
                <p>
                  <span className="font-medium text-navy">You have:</span> {step.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
