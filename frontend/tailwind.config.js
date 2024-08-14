/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        font_color: '#3A3A3A',
        grey_1: '#B0B0B0',
        grey_2: '#898989',
        grey_3: '#3A3A3A',
        primary_1: '#B88E2F',
        primary_2: '#FFF3E3',
        aqua_teal: '#2EC1AC',
        pink_red: '#E97171',
      },
    },
  },
  plugins: [],
}
