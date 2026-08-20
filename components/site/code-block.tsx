'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const EDITOR_BG = '#1e1e1e'
const EDITOR_BAR = '#252526'
const EDITOR_TEXT = '#d4d4d4'
const PROMPT_GREEN = '#4ec9b0'

export function CodeBlock({
  title = 'Terminal',
  children,
  variant = 'terminal',
  className,
}: {
  title?: string
  children: string
  variant?: 'terminal' | 'editor'
  className?: string
}) {
  const [copied, setCopied] = useState(false)
  const isTerminal = variant === 'terminal'

  async function copy() {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      toast.success('Copied to clipboard')
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      toast.error('Could not copy')
    }
  }

  return (
    <div
      className={cn('overflow-hidden rounded-lg border border-border mt-2 mb-2', className)}
      style={{ backgroundColor: EDITOR_BG, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
    >
      <div
        className="flex items-center justify-between gap-2 px-3 py-1.5 border-b"
        style={{ backgroundColor: EDITOR_BAR, borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <span className="font-mono text-xs" style={{ color: '#858585' }}>
          {title}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={copy}
          className="h-7 w-7 text-white/70 hover:text-white hover:bg-white/10"
          aria-label="Copy code"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </Button>
      </div>
      <div className="px-4 py-3 overflow-x-auto" style={{ backgroundColor: EDITOR_BG }}>
        <pre className="text-sm font-mono leading-relaxed m-0 whitespace-pre-wrap" style={{ color: EDITOR_TEXT }}>
          <code className="block">
            {isTerminal
              ? children.split('\n').map((line, i, arr) => (
                  <span key={i}>
                    {line.startsWith('$ ') ? (
                      <>
                        <span style={{ color: PROMPT_GREEN }}>$ </span>
                        {line.slice(2)}
                      </>
                    ) : (
                      line
                    )}
                    {i < arr.length - 1 && '\n'}
                  </span>
                ))
              : children}
          </code>
        </pre>
      </div>
    </div>
  )
}
