'use client'

import { motion } from 'motion/react'
import { Database, MessageSquareText, Timer } from 'lucide-react'
import { valueProps } from '@/lib/content'
import { Reveal } from '@/components/site/reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const icons = [Database, Timer, MessageSquareText] as const

export function ValueProps() {
  return (
    <section className="section-padding border-t border-border bg-background">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-3">{valueProps.eyebrow}</p>
          <h2 className="mb-12 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            {valueProps.headline}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {valueProps.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={item.title} delay={i * 0.08} className="min-w-0">
                <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                  <Card className="group h-full border-border bg-muted/60 shadow-sm transition-colors hover:border-primary/40 hover:bg-accent/40">
                    <CardHeader className="gap-4">
                      <div className="flex size-11 items-center justify-center rounded-lg border border-primary/30 bg-background text-primary shadow-sm transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="mb-1 font-mono text-xs text-blue-muted">{String(i + 1).padStart(2, '0')}</p>
                        <CardTitle className="font-heading text-xl font-extrabold tracking-tight">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Separator className="mb-4" />
                      <CardDescription className="font-sans text-[15px] leading-relaxed text-muted-foreground">
                        {item.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
