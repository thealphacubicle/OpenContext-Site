/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        /** Boston.gov: Montserrat for nav, buttons, primary headers (bold, often uppercase in UI) */
        heading: ['Montserrat', 'Arial', 'sans-serif'],
        /** Lora for body and supporting text */
        sans: ['Lora', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        boston: {
          charles: '#091F2F',
          optimistic: '#1871bd',
          freedom: '#FB4D42',
          blueDark: '#061622',
          blueBand: '#0C2639',
          blueMuted: '#45789C',
          blueOnDark: '#51ACFF',
          grayBody: '#58585B',
          grayRule: '#D2D2D2',
          grayBorder: '#E0E0E0',
          grayWash: '#F2F2F2',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#F2F2F2',
          band: '#0C2639',
          dark: '#061622',
        },
        ink: {
          /** Headers / official weight */
          DEFAULT: '#091F2F',
          body: '#58585B',
          muted: '#45789C',
          onDark: '#ffffff',
          subduedOnDark: 'rgba(255,255,255,0.82)',
        },
        line: {
          DEFAULT: '#E0E0E0',
          strong: '#D2D2D2',
          onDark: 'rgba(255,255,255,0.12)',
        },
        action: {
          DEFAULT: '#1871bd',
          hover: '#0C2639',
          muted: 'rgba(24, 113, 189, 0.12)',
          ring: 'rgba(24, 113, 189, 0.35)',
        },
        accent: {
          warm: '#FB4D42',
        },
      },
      borderRadius: {
        cta: '2px',
        card: '4px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(9, 31, 47, 0.08), 0 4px 16px rgba(9, 31, 47, 0.06)',
        nav: '0 1px 0 rgba(9, 31, 47, 0.06)',
      },
    },
  },
  plugins: [],
}
