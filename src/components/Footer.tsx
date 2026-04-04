interface FooterProps {
  githubUrl: string
}

export function Footer({ githubUrl }: FooterProps) {
  const issuesUrl = `${githubUrl}/issues`
  const licenseUrl = `${githubUrl}/blob/main/LICENSE`

  return (
    <footer className="border-t border-white/5" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container-main py-10 md:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-sm text-[#9ca3af] mb-6">
          <span className="max-w-xl">OpenContext — Open source template for government open data</span>
          <div className="flex flex-wrap gap-6 shrink-0">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href={issuesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-white"
            >
              Issues
            </a>
            <a
              href={licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-white"
            >
              License
            </a>
            <a
              href={`${githubUrl}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-white"
            >
              FAQ
            </a>
          </div>
        </div>
        <p className="font-sans text-sm text-[#9ca3af]">
          Built by Srihari Raman at the City of Boston Department of Innovation and Technology.
        </p>
      </div>
    </footer>
  )
}
