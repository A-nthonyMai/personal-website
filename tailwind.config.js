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
        'mint-green': '#3CCF91',
        'mahogany-red': '#Cf3c3c',
        'shakespeare-blue': '#3c94cf',
        'fuchsia-pink': '#Cf3ccc',
        'concrete-white': '#f2f2f2'
      },
      textColor: {
        'mint-green': '#3CCF91'
      },
    },
  },
  plugins: [],
}
