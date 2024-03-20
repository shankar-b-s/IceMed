/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'vio' : '#A679E0',
        'greeno' : '#90CB5C'
      },
      animation: {
        'float': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}