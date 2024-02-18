/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "#475BE8",
        cBase: "#808191",
        cOrange: "#f29a2e",
        cRed: "#ef0606",
        cGreen: "#4ce13f",
      },
    },
  },
  plugins: [],
};
