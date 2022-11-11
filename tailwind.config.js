/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#6846EC",
        secondary: "#1b1b1f",
        background: "#111111",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
