import type { MetadataRoute } from 'next'
import { site } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    {
      url: `${base}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
