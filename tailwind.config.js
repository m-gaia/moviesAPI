// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "light_black": "#1c1c1e",
      "white": "#f3f3f3",
      "black": "#19191b",
      "black_background": "#000000",
      "blue": "#5179ff",
      "yellow": "#f7ff00",
      "para_text": "#565657"
    },
    extend: {
      height: {
        "19": "70px",
      }
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },

  },
  plugins: [],
}
