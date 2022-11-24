/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "color-primary": "rgba(203, 132, 97, 1)",
        "color-light-primary": "rgba(203, 132, 97, 0.1)",
        "color-primary-lighten": "#c4724a",
        "color-tertiary": "rgba(242, 231, 219, 0.5)",
        "color-secondary": "rgba(20, 70, 58, 1)",
        "color-secondary-light": "rgba(36, 93, 81, 0.1)",
        "color-secondary-lighten": "#268770",
        "color-accent": "rgba(44, 44, 44, 0.5)",
        "color-grey": "rgba(245, 245, 245, 0.5)",
      },
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
      },
      lineHeight: {
        medium: "1.2",
      },
    },
  },
  plugins: [],
};
