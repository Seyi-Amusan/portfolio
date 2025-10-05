/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'story.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-text-stroke')
  ],
}

