'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { GITHUB_DOCS, furtherReading } from '@/lib/content'
import { Reveal } from '@/components/site/reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FurtherReading() {
  return (
    <section className="section-padding border-t border-border bg-muted">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-3">{furtherReading.eyebrow}</p>
          <h2 className="mb-3 max-w-xl font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            {furtherReading.headline}
          </h2>
          <p className="mb-10 max-w-xl font-sans text-muted-foreground">{furtherReading.body}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {furtherReading.links.map((link, i) => (
            <Reveal key={link.title} delay={Math.min(i, 4) * 0.05} className="min-w-0">
              <motion.a
                href={`${GITHUB_DOCS}/${link.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full no-underline"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 24 }}
              >
                <Card className="group h-full border-border bg-background shadow-sm transition-colors hover:border-primary/40">
                  <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
                    <CardTitle className="font-heading text-base font-extrabold tracking-tight transition-colors group-hover:text-primary">
                      {link.title}
                    </CardTitle>
                    <ArrowUpRight className="size-4 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-sans text-sm leading-relaxed">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
