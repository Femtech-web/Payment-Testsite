/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '500px'
      },
      colors: {
        btnColor: '#025efe',
        timerColor: '#1e2a53'
      },
      boxShadow: {
        btnShadow: '0 0 0 5px #3b83f65f',
      },
      backgroundImage: {
        'mastercard': "url('./assets/mc_symbol.svg')"
      }
    },
  },
  plugins: [],
}