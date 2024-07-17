/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js"
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fadeIn: 'fadeIn 1s',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 100
          },
        },
      }),
    },
  },
  plugins: [],
}

