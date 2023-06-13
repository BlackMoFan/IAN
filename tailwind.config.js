/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dropShadow: {
      '3xl-md': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.50)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      raleway: ["'Nunito', sans-serif"],
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
      'new-bg-color': '#E7EFF8',
      'new-special-font': '#4A8BFF',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

