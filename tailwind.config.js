/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require('tailwindcss/colors');

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
  // theme: {
  //   extend: {},
  // },
  theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			slate: colors.slate,
			zinc: colors.zinc,
			gray: colors.gray,
			neutral: colors.blueGray,
			stone: colors.stone,
		}
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

