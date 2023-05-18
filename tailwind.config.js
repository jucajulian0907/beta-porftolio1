/** @type {import('tailwindcss').Config} */
export const content = ["**/*.{html,js}"];
export const theme = {
  colors: {
    'background': '#0f0e17',
    'background-blue': '#141033',
    'background-gradient': '#413d63',
    'headline': '#FDEEE4',
    'sub-healine': '#2e2f3e',
    'paragraph': '#a7a9be',
    'button': '#ff8906',
    'button-text': '#fffffe',
    'alert': 'rgb(239 68 68)',
    'gradient-start': '#FF6B6B',
    'gradient-middle': '#48BB78',
    'gradient-end': '#3182CE',
  },
  extend: {
    fontFamily: {
      'montserrat': 'Montserrat, sans-serif',
      'hind': 'Hind, sans-serif',
      'josefin': 'Josefin Sans, sans-serif'
    },
    keyframes: {
      colorchange: {
        '0%': { color: '#E89907' },
        '25%': { color: '#FF8906' },
        '75%': { color: '#ff8906' },
        '100%': { color: '#E89907' },
      }
    },

    animation: {
      colorchange: 'colorchange 3s ease infinite'
    },
  },
};
export const plugins = [];