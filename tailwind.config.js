/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      primary_color : "#FF4A22",
      white : "#FFF",
      blue_black : "#12103D",
      gray_black : "#333333",
      shadow : "rgba(224, 224, 236, 0.80)"
    },
    extend: {
      fontFamily:{
        'sans': ['Poppins', 'sans-serif',  ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}