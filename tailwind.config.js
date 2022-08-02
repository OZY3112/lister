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
        priBlue: "#061A40",
        secBlue: "#4E6075",
        priWhite: "#C6C7C4",
        secWhite: "#EEF0F2",
        priPurple: "#4C2A85",
        secPurple: "#320E3B",
        priDark: "#0D0D0D",
        secDark: "#212121",
      },
    },
  },
  plugins: [],
};
