export function LocalTesting() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="section-inner">
        <div
          className="max-w-2xl border-l-2 border-[#2D5A27]/60 pl-6 py-2 bg-[#0f0f0f] pr-6"
          style={{ borderRadius: '0 2px 2px 0' }}
        >
          <h2 className="font-mono text-lg font-medium uppercase tracking-wider text-[#2D5A27] mb-3">
            Local testing
          </h2>
          <p className="font-sans text-[#9ca3af] text-base leading-relaxed">
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
