/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html, js}"],
  'watch': 'npx tailwindcss -i ./input.css -o ./dist/output.css --watch',
  theme: {
    extend: {

      screens:{
        'sm':'480px',


      },
      fontFamily:{
        'Autour+One':['Autour+One'],
        'Montserrat':['Montserrat'],
      },

      boxShadow: {
        'shw': '0 15px 20px  pink',
      },
   
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
      },


      },
  },
  plugins: [],
}


