/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins', 'sans-serif;'],
        monte: ['Montserrat Alternates', 'sans-serif;']
      },
      colors: {
        primary: '#494CA2',
        secondary: '',
        btnPrimary: '#8186D5',
        btnSecondary: '#494CA2'

      }
    },
  },
  plugins: [],
}
