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
        aboutBg: "rgba(12, 12, 12, 0.6)",
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
      letterSpacing: {
        custom: "1.75px",
        custom2: "4px",
        custom3: "2px",
        custom4: "1.5px",
      },
    },
  },
  plugins: [],
};
