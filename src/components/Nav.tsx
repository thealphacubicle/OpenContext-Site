interface NavProps {
  githubUrl: string
}

export function Nav({ githubUrl }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--cream)] border-b border-[var(--border)]">
      <div className="container-main flex items-center justify-between h-16">
        <a href="#" className="font-fraunces font-semibold text-xl text-navy no-underline">
          OpenContext
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-navy no-underline transition-colors hover:text-orange"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}
