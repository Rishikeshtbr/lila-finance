/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Hanuman: ["hanuman"],
      },
      colors: {
        primaryPink: "#FFC9C9",
        activeBrown: "#311212",
        footerBrown: "#250606",
        blackTextSecondary: "#323232",
        borderLightGray: "#EFEFEF",
        borderDashedColor: "#D9D9D9",
        disabledText: "#0E0E0E",
      },
    },
  },
  plugins: [],
};
