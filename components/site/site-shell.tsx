'use client'

import { SiteNav } from '@/components/site/nav'
import { ScrollProgress } from '@/components/site/scroll-progress'
import { SiteFooter } from '@/components/site/footer'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen flex-col bg-background text-muted-foreground">
        <ScrollProgress />
        <SiteNav />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <Toaster richColors position="bottom-right" />
      </div>
    </TooltipProvider>
  )
}
