/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'lightGrey': 'hsl(212, 45%, 89%)',
      'GrayishBlue': 'hsl(220, 15%, 55%)',
      'DarkBlue': 'hsl(218, 44%, 22%)'
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
