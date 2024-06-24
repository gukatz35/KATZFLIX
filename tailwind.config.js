/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-katz': '#FF0000',
        'secondary-katz': '#FFFFFF',
        'titulo-katz': '#FFFFFF',
        'fundo': '#000',
        'hover-color': '#7DCA99',
        'card': '#000',
        'Confira': '#FF0000'
        
      },
      fontFamily: {
        'font-header': ['Sedan SC', 'serif'],
        'font-sub': ["Inika", 'serif'],
        'font-text': ["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [],
}
