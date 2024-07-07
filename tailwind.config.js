/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px',
        '5xl': '2000px',
      }
    },
  },
  plugins: [],
}

