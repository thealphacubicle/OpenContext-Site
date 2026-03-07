export function BuiltInPlugins() {
  return (
    <section className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-6">
          Built-in plugins
        </h2>
        <div className="max-w-2xl">
          <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">CKAN</h3>
          <p className="font-sans text-muted text-base leading-relaxed mb-4">
            The CKAN plugin connects OpenContext to CKAN-powered open data portals. CKAN is the open-source
            platform used by hundreds of governments worldwide — including data.boston.gov, data.gov, and
            data.gov.uk. If your city or agency runs a CKAN portal, this plugin gets you up and running
            without writing custom code.
          </p>
          <p className="font-sans text-muted text-base leading-relaxed">
            Additional plugins can be contributed to the project. Custom plugins are supported out of the box
            — drop your plugin into the designated folder and the framework will discover and load it.
          </p>
        </div>
      </div>
    </section>
  )
}
