import { NavLink } from 'react-router-dom'

interface NavProps {
  githubUrl: string
}

export function Nav({ githubUrl }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[#050505] border-b border-white/5">
      <div className="container-main flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <NavLink
            to="/home"
            className="font-fraunces font-semibold text-xl text-white no-underline transition-colors hover:text-orange"
          >
            OpenContext
          </NavLink>
          <div className="flex gap-6 font-mono text-sm">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `no-underline transition-colors hover:text-white ${isActive ? 'text-orange font-medium' : 'text-[#9ca3af]'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `no-underline transition-colors hover:text-white ${isActive ? 'text-orange font-medium' : 'text-[#9ca3af]'}`
              }
            >
              About OpenContext
            </NavLink>
            <NavLink
              to="/connect"
              className={({ isActive }) =>
                `no-underline transition-colors hover:text-white ${isActive ? 'text-orange font-medium' : 'text-[#9ca3af]'}`
              }
            >
              Connect
            </NavLink>
          </div>
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
    </nav>
  )
}
