const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*", "*./assets/js/*.js"],
  theme: {
    screens: {
      sm: "200px",
      md: "500px",
      lg: "1000px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-bg": "#f5f6fa",
        "custom-white": "#fff",
        "custom-black": "#111",
      },
    },
  },
  plugins: [],
};
