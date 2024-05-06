/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#3E4C59",
        spanColor: "#52606D",
        tinWhite: "#FFFFFFDE",
      },
      scale: {
        20: "0.3",
      },
      // keyframes: {
      //   shimmer: {
      //     "0%": {
      //       transform: "translateX(-100%)",
      //     },
      //     "100%": {
      //       transform: "translateX(100%)",
      //     },
      //   },
      // },
      // animation: {
      //   shimmer: "shimmer 1.5s infinite linear",
      // },
    },
  },
  plugins: [],
};

