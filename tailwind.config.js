/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js, jsx, tsx}"], //iki yıldız tüm iç klasörleri de al demek.
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      spacing: {
        128: "32rem",
      },

      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      colors: {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-grey": "#DDDDDD",
        "gega-white": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
