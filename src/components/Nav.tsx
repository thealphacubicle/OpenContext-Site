import { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface NavProps {
  githubUrl: string
}

const navLinks = [
  { to: '/home', label: 'HOME' },
  { to: '/how-it-works', label: 'ABOUT OPENCONTEXT' },
  { to: '/connect', label: 'CONNECT' },
]

export function Nav({ githubUrl }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-line shadow-nav">
      <div className="container-main flex items-center justify-between h-16">
        <NavLink
          to="/home"
          className="no-underline transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 rounded-sm"
          onClick={() => setMenuOpen(false)}
          aria-label="OpenContext home"
        >
          <span className="font-heading font-extrabold text-lg sm:text-xl text-ink tracking-tight uppercase">
            OpenContext
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 font-heading text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `no-underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 rounded-sm py-1 ${
                    isActive ? 'text-action' : 'text-ink-muted hover:text-boston-charles'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-xs font-bold uppercase tracking-wider text-ink no-underline border-2 border-boston-charles px-4 py-2 rounded-cta transition-colors hover:bg-boston-charles hover:text-ink-onDark focus:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
          >
            View on GitHub
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-action"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-5 h-0.5 bg-boston-charles transition-all duration-200 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-boston-charles transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-boston-charles transition-all duration-200 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-line bg-surface-muted">
          <div className="container-main py-2 flex flex-col font-heading text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `no-underline py-3 border-b border-line transition-colors ${
                    isActive ? 'text-action' : 'text-ink-muted hover:text-boston-charles'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-action py-3 no-underline hover:text-action-hover"
              onClick={() => setMenuOpen(false)}
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
