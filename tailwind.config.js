/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins', 'sans-serif;'],
        monte: ['Montserrat Alternates', 'sans-serif;'],
        righteous: ['Righteous', 'cursive;']
      },
      colors: {
        primary: '#494CA2',
        secondary: '',
        btnPrimary: '#54B435',
        btnSecondary: '#379237'

      },
      screens: {
        mobile: { min: '320px', max: '425px' },
        tablet: { min: '426px', max: '768px' },
        laptopsm: { min: '769px', max: '1022px'  },
        laptop: { min: '1023px', max: '1024px'},
        desktop: { min: '1025px', max: '2560px' }
      }
    },
  },
  plugins: [],
}
