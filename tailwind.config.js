/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        acorn: ['Acorn Bold','sans-serif']
      },
      screens:{
        'projectscard':'1130px'
      },
    },
  },
  plugins: [],
}
