/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    colors: {
      'background': '#0f0e17',
      'background-gradient': '#413d63',
      'headline': '#fffffe',
      'sub-healine': '#2e2f3e',
      'paragraph': '#a7a9be',
      'button': '#ff8906',
      'button-text': '#fffffe',
      'alert': 'rgb(239 68 68)'
    },
    extend: {
      fontFamily: {
        'monserrat': 'Monserrat, sans-serif',
        'hind': 'Hind, sans-serif'
      },
},
  },
  plugins: [],
}