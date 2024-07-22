/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"GeneralSans"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
