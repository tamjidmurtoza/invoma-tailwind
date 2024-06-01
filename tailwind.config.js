const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "200px", // Small screen size
        md: "768px", // Medium screen size
        lg: "1024px", // Large screen size
      },
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
