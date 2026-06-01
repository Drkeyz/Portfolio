/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0c0d',
        slate: '#4a5565',
        muted: '#6a7282',
      },
      fontFamily: {
        sans: ['Aeonik', 'Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      letterSpacing: {
        tight2: '-0.138em',
      },
      fontSize: {
        '7xl': ['4rem', { lineHeight: '4.5rem', letterSpacing: '-0.034em' }],
        '8xl': ['4.5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
