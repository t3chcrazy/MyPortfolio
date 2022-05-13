const plugin = require("tailwindcss/plugin")

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: "rotateY(0deg)"
    },
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.backface-hidden': {
      'backface-visibility': "hidden"
    }
  }, ["hover", "group-hover"])
})

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      robotoSlab: ["Roboto Slab"]
    },
    fontSize: {
      colossal: "60px",
      jumbo: "50px",
      huge: "40px",
      title: "30px",
      heading1: "24px",
      heading2: "20px",
      heading3: "18px",
      paragraph: "16px",
      small: "14px",
      tiny: "12px"
    },
    extend: {
      boxShadow: {
        "md-white": "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)"
      },
      scale: {
        "neg-1": "-1"
      },
      screens: {
        "2xl": "1280px"
      },
      stroke: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
        'orange': theme('colors.amber.500'),
        'yellow': theme('colors.yellow.500')
      })
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"]
    },
  },
  plugins: [rotateY],
}
