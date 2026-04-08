
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        cyber: {
          dark: '#080012',
          navy: '#0a0a1a',
          purple: '#a855f7',
          cyan: '#06b6d4',
          magenta: '#ec4899',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(to right, #a855f7, #06b6d4)',
      }
    },
  },
  plugins: [],
}
