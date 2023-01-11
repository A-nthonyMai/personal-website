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
        'woodsmoke-black': '#181a1b',
        'shark-grey': '#222426',
        'mint-green': '#3CCF91',
        'mahogany-red': '#Cf3c3c',
        'shakespeare-blue': '#3c94cf',
        'fuchsia-pink': '#Cf3ccc',
        'concrete-white': '#f2f2f2',
        'apple-green': '#4acf3c',
        'sienna-orange': '#cf773c'
      },
      textColor: {
        'mint-green': '#3CCF91'
      },
    },
  },
  plugins: [],
}
