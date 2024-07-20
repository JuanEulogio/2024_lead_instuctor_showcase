/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js"
  ],
  theme: {
    extend: {},
    cursor: {
      drawn: "url(/src/assets/cursor.png), default",
    },

    colors: {
      'pastelSkin': '#F7ECDE',
      'pastelBeige': '#E9DAC1',
      'pastelTeal': '#9ED2C6',
      'pastelStongTeal': '#54BAB9'
    },
    
    fontFamily: {
      'Patrick-Hand': ['"Patrick Hand"', 'cursive'],
    },

  },
  plugins: [],
}

