/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "soft-black": "#000000",
      green: "#4EE1A0",
      "hard-gray": "#242424",
      "soft-gray": "#D9D9D9",
      white: "#FFFFFF",
    },
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
