/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#db2d2d",
        secondary: "#FF5F5F",
        faded: "gray",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        mainBg: "url('/img/bordes.png')",
        teamBg: "url('/img/section-team.jpg')",
      },
    },
  },
  plugins: [],
};
