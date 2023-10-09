/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'youtube-red': '#FF0000',
        'almost-black': '#282828',
        'gray-lines': '#585659',
        'silver': '#C0C0C0',
      },
      fontFamily: {
        'league-gothic': ['League Gothic', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

