/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        cream: '#050505',
        navy: '#ffffff',
        orange: '#ff6b2b',
        'civic-blue': '#3b82f6',
        amber: '#f59e0b',
        border: 'rgba(255,255,255,0.08)',
        muted: '#9ca3af',
        'chip-muted': '#1a1a1a',
        'chip-muted-text': '#6b7280',
        surface: '#0f0f0f',
        'surface-2': '#1a1a1a',
      },
      borderRadius: {
        cta: '2px',
      },
    },
  },
  plugins: [],
}
