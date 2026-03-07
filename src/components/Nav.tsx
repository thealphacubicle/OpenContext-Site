import { NavLink } from 'react-router-dom'

interface NavProps {
  githubUrl: string
}

export function Nav({ githubUrl }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--cream)] border-b border-[var(--border)]">
      <div className="container-main flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <NavLink
            to="/home"
            className="font-fraunces font-semibold text-xl text-navy no-underline transition-colors hover:text-orange"
          >
            OpenContext
          </NavLink>
          <div className="flex gap-6 font-mono text-sm">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `no-underline transition-colors hover:text-orange ${isActive ? 'text-orange font-medium' : 'text-muted'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `no-underline transition-colors hover:text-orange ${isActive ? 'text-orange font-medium' : 'text-muted'}`
              }
            >
              How It Works
            </NavLink>
          </div>
        </div>
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
