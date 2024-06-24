/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-kaneto': '#033325',
        'secondary-kaneto': '#64756A',
        'titulo-kaneto': '#5FAA95',
        'fundo': '#000',
        'hover-color': '#7DCA99',
        'card': '#334B3C'
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
