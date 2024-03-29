/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
      }
    },
  },
  plugins: [],
}
