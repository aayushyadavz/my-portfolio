/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorText: "#fff",
        colorPrimary: "#576cbc",
        colorSecondary: "#19376d",
        colorDark: "#0b2447",
        colorBg: "#04152d",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
    },
  },
  plugins: [],
};
