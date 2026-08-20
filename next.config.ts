import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/docs', destination: '/how-it-works', permanent: true },
      { source: '/connect', destination: '/how-it-works', permanent: true },
      { source: '/bulletin', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
