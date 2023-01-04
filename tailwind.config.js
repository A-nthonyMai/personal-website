/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'mint-green': '#3CCF91'
      },
      textColor: {
        'mint-green': '#3CCF91'
      },
    },
  },
  plugins: [],
}