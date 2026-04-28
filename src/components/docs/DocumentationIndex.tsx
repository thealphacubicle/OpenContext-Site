import { Link } from 'react-router-dom'

interface DocumentationIndexProps {
  githubUrl: string
}

const docs = [
  {
    title: 'Connect to your MCP',
    description: 'Connect Claude, Cursor, Gemini CLI, or any HTTP client to your MCP server.',
    href: '/connect',
    internal: true,
  },
  {
    title: 'Quickstart guide',
    description: 'Get from zero to a working deployment in minutes.',
    file: 'QUICKSTART.md',
    internal: false,
  },
  {
    title: 'Architecture',
    description: 'Understand how OpenContext fits between AI assistants and civic data systems.',
    file: 'ARCHITECTURE.md',
    internal: false,
  },
  {
    title: 'Custom plugins guide',
    description: 'Write and register your own plugins for non-CKAN data sources.',
    file: 'CUSTOM_PLUGINS.md',
    internal: false,
  },
  {
    title: 'Built-in plugins reference',
    description: 'Documentation for the CKAN plugin and other bundled plugins.',
    file: 'BUILT_IN_PLUGINS.md',
    internal: false,
  },
  {
    title: 'Deployment guide',
    description: 'Deploy to your infrastructure and obtain your MCP endpoint URL.',
    file: 'DEPLOYMENT.md',
    internal: false,
  },
  {
    title: 'FAQ',
    description: 'Common questions about OpenContext, MCP, and civic data integration.',
    file: 'FAQ.md',
    internal: false,
  },
]

export function DocumentationIndex({ githubUrl }: DocumentationIndexProps) {
  const baseUrl = `${githubUrl}/blob/main/docs`
  const docLinks = docs.map((doc) =>
    'file' in doc ? { ...doc, href: `${baseUrl}/${doc.file}`, internal: false } : doc,
  )

  const cardInner = (doc: (typeof docLinks)[number]) => (
    <>
      <span
        className="absolute top-3 right-3 w-1 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-boston-optimistic rounded-sm"
        aria-hidden
      />

      <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-2 group-hover:text-action transition-colors pr-6 uppercase tracking-tight">
        {doc.title}
      </h3>
      <p className="font-sans text-ink-body text-[15px] leading-relaxed">{doc.description}</p>

      <span
        className="absolute right-5 top-1/2 -translate-y-1/2 font-mono text-action opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        aria-hidden
      >
        →
      </span>
    </>
  )

  const cardClass =
    'reveal block relative min-h-[100px] p-6 border border-line bg-surface-muted no-underline transition-all hover:border-action/40 hover:bg-surface shadow-card group rounded-card'

  return (
    <section className="section-padding border-t border-line bg-surface-muted">
      <div className="section-inner">
        <h2 className="reveal eyebrow text-xl md:text-2xl mb-8">Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {docLinks.map((doc, i) => {
            const delayClass = `reveal-delay-${Math.min(i + 1, 3)}`
            return doc.internal ? (
              <Link key={doc.title} to={doc.href} className={`${cardClass} ${delayClass}`}>
                {cardInner(doc)}
              </Link>
            ) : (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} ${delayClass}`}
              >
                {cardInner(doc)}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
