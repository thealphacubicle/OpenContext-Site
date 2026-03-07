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
        cream: '#f5f0e8',
        navy: '#1a2744',
        orange: '#c45c1a',
        'civic-blue': '#2563eb',
        amber: '#d97706',
        border: '#e0d8cc',
        muted: '#4a4a4a',
        'chip-muted': '#e8e2d8',
        'chip-muted-text': '#999',
      },
      borderRadius: {
        cta: '2px',
      },
    },
  },
  plugins: [],
}
