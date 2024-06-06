const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*", "*./assets/js/*.js"],
  theme: {
    screens: {
      sm: "200px",
      md: "500px",
      lmd: "768px",
      lg: "1000px",
    },
    extend: {
      zIndex: {
        2: "2",
      },
      skew: {
        35: "35deg",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-bg": "#f5f6fa",
        "custom-white": "#fff",
        "custom-black": "#111",
        "custom-blue": "#007aff",
        "custom-gray": "#666",
      },
    },
  },
  plugins: [],
};
