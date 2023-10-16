/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        text: colors.gray,
        background: colors.white,
      },
    },
  },
  plugins: [],
};
