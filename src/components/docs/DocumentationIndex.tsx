import { Link } from 'react-router-dom'

interface DocumentationIndexProps {
  githubUrl: string
}

const docs = [
  {
    title: 'Connect to your MCP',
    description: 'Connect Claude, Cursor, Gemini CLI, or any HTTP client to your organization\'s MCP server.',
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
    title: 'Testing guide',
    description: 'Run locally and validate your plugin before deploying.',
    file: 'TESTING.md',
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
    'file' in doc ? { ...doc, href: `${baseUrl}/${doc.file}`, internal: false } : doc
  )

  return (
    <section className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-12">
          Documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docLinks.map((doc) => {
            const className =
              'block p-6 border border-[var(--border)] no-underline transition-colors hover:border-orange hover:bg-[#faf8f5]'
            const style = { borderRadius: '2px' } as const
            return doc.internal ? (
              <Link
                key={doc.title}
                to={doc.href}
                className={className}
                style={style}
              >
                <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">{doc.title}</h3>
                <p className="font-sans text-muted text-[15px] leading-relaxed">{doc.description}</p>
              </Link>
            ) : (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={style}
              >
                <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">{doc.title}</h3>
                <p className="font-sans text-muted text-[15px] leading-relaxed">{doc.description}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
