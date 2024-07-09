/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DEF9C4',
        secondary: '#9CDBA6',
        'text-primary': '#1A2130',
        'text-secondary': '#D6EFD8',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}