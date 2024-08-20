/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        red: {
          1: "#C73B0F",
        },
        rose: {
          900: "#260F08",
          500: "#87635A",
          400: "#AD8A85",
          300: "#CAAFA7",
          100: "Rose-100",
          50: "#FCF8F6",
        },
        green: {
          1: "#1EA575",
        },
      },
    },
  },
  plugins: [],
};
