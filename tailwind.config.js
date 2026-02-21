/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#f7f3ef',
          100: '#ebe3db',
          200: '#d6c6b5',
          300: '#bfa38b',
          400: '#a88365',
          500: '#946a48', // Primary Wood
          600: '#785338',
          700: '#63432f',
          800: '#52382a',
          900: '#432f25',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}