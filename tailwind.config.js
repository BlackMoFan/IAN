/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      raleway: ["'Raleway', sans-serif"],
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'input-area': '#DBEAFE',
      'input-area-text': '#929292',
      'button-color': '#69C9AF',
      'heading-color': '#0F172A',
      'btn-text': '#1B4B3E',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

