/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js"
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

    cursor: {
      drawn: "url(/src/assets/cursor.png), default",
    },

    colors: {
      'pastelSkin': '#F7ECDE',
      'pastelBeige': '#E9DAC1',
      'pastelTeal': '#9ED2C6',
      'pastelStongTeal': '#54BAB9'    },
  },
  plugins: [],
}

