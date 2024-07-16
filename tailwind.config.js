/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'story.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-text-stroke')
  ],
}

