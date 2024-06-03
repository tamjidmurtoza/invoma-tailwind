const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
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
        "print-red": "#ff0000",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".print-bg-custom-bg": {
          "@media print": {
            backgroundColor: "#f5f6fa !important",
            "-webkit-print-color-adjust": "exact !important",
          },
        },
        ".print-bg-red": {
          "@media print": {
            backgroundColor: "#ff0000 !important",
            "-webkit-print-color-adjust": "exact !important",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
