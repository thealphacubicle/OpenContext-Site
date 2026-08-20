'use client'

import { motion } from 'motion/react'
import { Database, Server, Sparkles } from 'lucide-react'
import { pipeline } from '@/lib/content'
import { Reveal } from '@/components/site/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const icons = [Database, Server, Sparkles] as const

export function Pipeline() {
  return (
    <section className="section-padding border-t border-border bg-muted">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-3">{pipeline.eyebrow}</p>
          <h2 className="mb-12 max-w-lg font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            {pipeline.headline}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-0">
          {pipeline.nodes.map((node, i) => {
            const Icon = icons[i]
            return (
              <div key={node.title} className="contents">
                <Reveal delay={i * 0.1} className="min-w-0">
                  <motion.div
                    className="h-full"
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                  >
                    <Card className="h-full border-border bg-background shadow-sm">
                      <CardContent className="flex h-full flex-col p-6">
                        <div className="mb-4 flex size-11 items-center justify-center rounded-full border border-primary/35 bg-accent text-primary">
                          <Icon className="size-5" />
                        </div>
                        <p className="mb-1 font-heading text-lg font-extrabold tracking-tight text-foreground">
                          {node.title}
                        </p>
                        <p className="mb-3 font-mono text-xs text-blue-muted">{node.subtitle}</p>
                        <Separator className="mb-3" />
                        <p className="font-sans text-sm leading-relaxed text-muted-foreground">{node.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Reveal>
                {i < pipeline.nodes.length - 1 && (
                  <div className="hidden items-center px-2 md:flex" aria-hidden>
                    <div className="relative h-0.5 w-8 overflow-hidden rounded-full bg-primary/20">
                      <motion.div
                        className="absolute inset-y-0 w-1/2 bg-primary/70"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-lg font-sans text-xs leading-relaxed text-blue-muted">{pipeline.footnote}</p>
        </Reveal>
      </div>
    </section>
  )
}
