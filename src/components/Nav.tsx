import { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface NavProps {
  githubUrl: string
}

const navLinks = [
  { to: '/home', label: 'Home' },
  { to: '/how-it-works', label: 'About OpenContext' },
  { to: '/connect', label: 'Connect' },
]

export function Nav({ githubUrl }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#050505] border-b border-white/5">
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink
          to="/home"
          className="font-fraunces font-semibold text-xl text-white no-underline transition-colors hover:text-orange"
          onClick={() => setMenuOpen(false)}
        >
          OpenContext
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 font-mono text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `no-underline transition-colors hover:text-white ${isActive ? 'text-orange font-medium' : 'text-[#9ca3af]'}`
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
            className="font-mono text-sm text-white no-underline border border-white/20 px-4 py-1.5 transition-colors hover:bg-white hover:text-black"
            style={{ borderRadius: '2px' }}
          >
            View on GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-200 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-200 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#050505]">
          <div className="container-main py-2 flex flex-col font-mono text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `no-underline transition-colors hover:text-white py-3 border-b border-white/5 ${
                    isActive ? 'text-orange font-medium' : 'text-[#9ca3af]'
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
              className="font-mono text-sm text-white no-underline transition-colors hover:text-orange py-3"
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
