/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': `'Space Grotesk', 'sans-serif'`
      }
    },
  },
  plugins: [],
}