import { ImageResponse } from 'next/og'
import { site } from '@/lib/content'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#091F2F',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#51ACFF',
            fontWeight: 700,
          }}
        >
          Open source MCP
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: '#ffffff', lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.82)', maxWidth: 900, lineHeight: 1.35 }}>
            Let AI assistants talk to your city&apos;s data
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#1871bd',
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#1871bd',
            }}
          />
          Civic open data · MCP
        </div>
      </div>
    ),
    { ...size },
  )
}
