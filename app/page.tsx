import type { Metadata } from 'next'
import { HomeHero } from '@/components/home/hero'
import { ValueProps } from '@/components/home/value-props'
import { Proof } from '@/components/home/proof'
import { Stack } from '@/components/home/stack'
import { ClosingCta } from '@/components/home/closing-cta'
import { site } from '@/lib/content'

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ValueProps />
      <Proof />
      <Stack />
      <ClosingCta />
    </>
  )
}
