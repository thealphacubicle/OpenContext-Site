const features = [
  {
    title: 'Plugin architecture and auto-discovery',
    description:
      'Write custom plugins and drop them into a designated folder. The framework auto-discovers and loads them at startup. No manual registration required — add a file, and it becomes available.',
  },
  {
    title: 'Dual use: Claude connectors, Gemini CLI, and direct HTTP',
    description:
      'Connect OpenContext through Claude connectors or Gemini CLI. You can also call it directly from any application using the MCP JSON-RPC format over HTTP. One deployment serves all workflows.',
  },
  {
    title: 'One-command deployment',
    description:
      'The deploy script validates that exactly one plugin is configured, packages your code, and deploys to your infrastructure. It returns an endpoint URL — that URL is what you wire into Claude connectors, Gemini CLI, or your application.',
  },
  {
    title: 'Built-in CKAN support',
    description:
      'The primary built-in plugin connects to CKAN — the open-source data portal platform used by hundreds of governments worldwide, including data.boston.gov, data.gov, and data.gov.uk.',
  },
  {
    title: 'Local testing before cloud',
    description:
      'Run a local server before deploying to production. Test your plugin logic against it using standard HTTP tools. Iterate quickly and build confidence before touching your infrastructure.',
  },
  {
    title: 'MIT license',
    description:
      'OpenContext is open source under the MIT license. Fork it, modify it, and deploy it without restrictions. Built by Srihari Raman at the City of Boston Department of Innovation and Technology.',
  },
]

export function Features() {
  return (
    <section className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="border-l-2 border-[var(--border)] pl-6">
              <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">{feature.title}</h3>
              <p className="font-sans text-muted text-[15px] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
