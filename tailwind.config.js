/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
    },

    extend: {
      colors: {
        "soft-black": "#151515",
        green: "#4EE1A0",
        "hard-gray": "#242424",
        "soft-gray": "#D9D9D9",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
