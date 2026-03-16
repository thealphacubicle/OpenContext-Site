const EDITOR_BG = '#1e1e1e'
const EDITOR_BAR = '#252526'
const EDITOR_TEXT = '#d4d4d4'
const PROMPT_GREEN = '#4ec9b0'

interface CodeWindowProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  /** 'terminal' for $ prompt highlighting, 'editor' for plain code */
  variant?: 'terminal' | 'editor'
  className?: string
}

export function CodeWindow({
  title = 'Terminal',
  subtitle,
  children,
  variant = 'terminal',
  className = '',
}: CodeWindowProps) {
  const isTerminal = variant === 'terminal'

  return (
    <div
      className={`rounded overflow-hidden border border-[var(--border)] mt-2 mb-2 ${className}`.trim()}
      style={{
        backgroundColor: EDITOR_BG,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    >
      {/* Code editor-style tab bar */}
      <div
        className="flex items-center gap-2 px-3 py-1.5 border-b"
        style={{
          backgroundColor: EDITOR_BAR,
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        <span
          className="font-mono text-xs"
          style={{ color: '#858585' }}
        >
          {title}
        </span>
        {subtitle && (
          <span className="font-mono text-xs" style={{ color: '#6e6e6e' }}>
            {subtitle}
          </span>
        )}
      </div>

      {/* Content area */}
      <div
        className="px-4 py-3 overflow-x-auto"
        style={{ backgroundColor: EDITOR_BG }}
      >
        <pre
          className="text-sm font-mono leading-relaxed m-0 whitespace-pre-wrap"
          style={{ color: EDITOR_TEXT }}
        >
          <code className="block">
            {isTerminal && typeof children === 'string'
              ? (() => {
                  const lines = children.split('\n')
                  return lines.map((line, i) => (
                    <span key={i}>
                      {line.startsWith('$ ') ? (
                        <>
                          <span style={{ color: PROMPT_GREEN }}>$ </span>
                          {line.slice(2)}
                        </>
                      ) : (
                        line
                      )}
                      {i < lines.length - 1 && '\n'}
                    </span>
                  ))
                })()
              : children}
          </code>
        </pre>
      </div>
    </div>
  )
}
