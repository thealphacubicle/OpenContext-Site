interface FooterProps {
  githubUrl: string
}

export function Footer({ githubUrl }: FooterProps) {
  const issuesUrl = `${githubUrl}/issues`
  const licenseUrl = `${githubUrl}/blob/main/LICENSE`

  return (
    <footer className="border-t border-line-onDark bg-surface-band text-ink-onDark mt-auto">
      <div className="container-main py-10 md:py-12">
        <div className="mb-8">
          <p className="font-heading font-extrabold text-lg uppercase tracking-tight text-ink-onDark mb-2">
            OpenContext
          </p>
          <p className="font-sans text-sm text-ink-subduedOnDark max-w-xl leading-relaxed">
            Open source MCP framework for government open data. Connect your portal so residents and tools can query real city data responsibly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-heading text-xs font-bold uppercase tracking-wider text-ink-subduedOnDark mb-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-ink-onDark hover:text-boston-blueOnDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-boston-blueOnDark focus-visible:ring-offset-2 focus-visible:ring-offset-surface-band rounded-sm"
            >
              GitHub
            </a>
            <a
              href={issuesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-ink-onDark hover:text-boston-blueOnDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-boston-blueOnDark focus-visible:ring-offset-2 focus-visible:ring-offset-surface-band rounded-sm"
            >
              Issues
            </a>
            <a
              href={licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-ink-onDark hover:text-boston-blueOnDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-boston-blueOnDark focus-visible:ring-offset-2 focus-visible:ring-offset-surface-band rounded-sm"
            >
              License
            </a>
            <a
              href={`${githubUrl}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-ink-onDark hover:text-boston-blueOnDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-boston-blueOnDark focus-visible:ring-offset-2 focus-visible:ring-offset-surface-band rounded-sm"
            >
              FAQ
            </a>
          </div>
        </div>
        <p className="font-sans text-sm text-ink-subduedOnDark border-t border-line-onDark pt-6">
          Built by Srihari Raman at the City of Boston Department of Innovation and Technology.
        </p>
      </div>
    </footer>
  )
}
