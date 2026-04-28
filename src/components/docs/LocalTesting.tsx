export function LocalTesting() {
  return (
    <section className="section-padding border-t border-line bg-surface">
      <div className="section-inner">
        <div className="max-w-2xl border-l-4 border-action pl-6 py-4 bg-surface-muted pr-6 rounded-r-md">
          <h2 className="font-heading font-bold text-base uppercase tracking-wider text-action mb-3">
            Local testing
          </h2>
          <p className="font-sans text-ink-body text-base leading-relaxed">
            Before production, run a local server. Exercise your plugin with curl, Postman, or any JSON-RPC client.
            When behavior matches expectations, run the deploy script and promote to your cloud environment.
          </p>
        </div>
      </div>
    </section>
  )
}
