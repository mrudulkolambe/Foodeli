/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#EB0029",
        blackAccent: "#010F1C",
        accentlight: "#ff5271"
      }
    },
  },
  plugins: [],
}