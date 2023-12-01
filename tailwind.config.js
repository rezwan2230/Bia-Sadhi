/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  // content: [
  //   "./src/**/*.{js,ts,jsx,tsx}",
  //   "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // must use this line to compile and generate our RizzUI components style
  // ],
  theme: {
    extend: {},
  },
  // plugins: [],
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      // required this to prevent any style on readOnly input elements
      addVariant("not-read-only", "&:not(:read-only)");
    }),
  ],
}

