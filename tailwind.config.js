/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        "custom-bg": "#f5f6fa",
        "custom-white": "#fff",
      },
    },
  },
  plugins: [],
};
