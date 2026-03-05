interface FooterProps {
  githubUrl: string
}

export function Footer({ githubUrl }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-main flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-10 md:py-12 font-mono text-sm text-muted">
        <span className="max-w-xl">OpenContext — Open source template for government open data</span>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 no-underline transition-colors hover:text-orange"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
