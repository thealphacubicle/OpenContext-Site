export function McpConnectionHero() {
  return (
    <section className="py-14 md:py-20 border-b border-[var(--border)]">
      <div className="section-inner max-w-2xl">
        <h1 className="font-fraunces text-3xl md:text-4xl font-light text-navy leading-tight mb-4">
          Deploy your own MCP
        </h1>
        <p className="font-sans text-muted text-lg leading-relaxed mb-8">
          Fork the OpenContext repo, use the CLI to configure and deploy your server to AWS,
          then connect it to Claude — about 15 minutes end to end.
        </p>
        <div className="border-l-2 border-orange pl-4 font-sans text-sm text-muted">
          <span className="font-medium text-navy block mb-1">Prerequisites</span>
          Python 3.11+, AWS credentials configured, Terraform ≥ 1.0, your open data portal URL
        </div>
      </div>
    </section>
  )
}
