/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#1B1B1D",
          light: "#2E2E32",
        },
        accent: {
          DEFAULT: "#F2650A",
          dark: "#D6560A",
          light: "#FFF1E6",
        },
        paper: "#F6F5F3",
        ink: "#4A4A4E",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};
