/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue": "#4E6280",
        "dark-blue": "#242430",
        "extra-dark-blue": "#1A1A22",
        "orange": "#FF7A64",
        "yellow": "#FFF06B",
        "pink": "#FF8BB5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
