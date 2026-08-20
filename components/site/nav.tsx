'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Menu } from 'lucide-react'
import { GITHUB_URL, navLinks, site } from '@/lib/content'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useState } from 'react'

function GitHubAvatarLink({ className }: { className?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
          className={cn(
            'rounded-full outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring',
            className,
          )}
        >
          <Avatar
            size="default"
            className="size-9 border border-foreground/15 bg-charles-band text-white ring-2 ring-background transition-colors hover:border-primary hover:bg-foreground"
          >
            <AvatarFallback className="bg-transparent text-current">
              <Github className="size-4" />
            </AvatarFallback>
          </Avatar>
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom">View on GitHub</TooltipContent>
    </Tooltip>
  )
}

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-main flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-sm font-heading text-lg font-extrabold tracking-tight text-foreground no-underline hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-xl"
          aria-label={`${site.name} home`}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        'rounded-none bg-transparent px-3 py-2 font-heading text-xs font-bold uppercase tracking-wider shadow-none hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent',
                        active ? 'text-primary' : 'text-blue-muted hover:text-foreground',
                      )}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <GitHubAvatarLink />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <GitHubAvatarLink />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button type="button" variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left font-heading">{site.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 font-heading text-xs font-bold uppercase tracking-wider">
                {navLinks.map((link) => {
                  const active = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-md px-3 py-3 no-underline transition-colors',
                        active ? 'bg-accent text-primary' : 'text-blue-muted hover:bg-muted hover:text-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-primary no-underline hover:bg-muted"
                >
                  View on GitHub
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
