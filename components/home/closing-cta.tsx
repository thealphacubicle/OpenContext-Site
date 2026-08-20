import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { GITHUB_URL, closing } from '@/lib/content'
import { Reveal } from '@/components/site/reveal'
import { Button } from '@/components/ui/button'

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-charles-band text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 80% 20%, rgba(24, 113, 189, 0.45) 0%, transparent 55%)',
        }}
        aria-hidden
      />
      <div className="section-inner relative z-10 section-padding">
        <Reveal>
          <p className="mb-8 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {closing.quote}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="font-heading font-semibold">
              <Link href="/how-it-works">
                {closing.primaryCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent font-heading font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                {closing.secondaryCta}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
