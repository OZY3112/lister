/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
            bg: "#e0e0e0",
            pri: "#061A40",
            sec: "#4E6075",
      }

    },
  },
  plugins: [],
}
