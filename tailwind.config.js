/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1320px',
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    fontFamily: {
      'lemonada': 'Lemonada, cursive',
    },
    fontSize: {
      'logo' : '14px',
      'ub' : '20px'
    }
  },
  plugins: [],
}

