export function LocalTesting() {
  return (
    <section className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <div className="max-w-2xl border-l-2 border-orange pl-6 py-2">
          <h2 className="font-mono text-lg font-medium uppercase tracking-wider text-orange mb-3">
            Local testing
          </h2>
          <p className="font-sans text-muted text-base leading-relaxed">
            Before deploying to production, run a local server. Test your plugin logic against it using standard
            HTTP tools — curl, Postman, or any client that speaks JSON-RPC. Iterate quickly and build
            confidence that your configuration works. Only when you&apos;re ready, run the deploy script and
            push to your infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}
