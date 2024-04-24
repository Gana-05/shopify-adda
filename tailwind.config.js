module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_0c": "#0000000c",
          "900_66": "#00000066",
          "900_01": "#130e00",
        },
        white: { A700: "#ffffff" },
        blue_gray: {
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9ea8ba",
          400: "#74839d",
          800: "#363853",
          900: "#262b35",
        },
        gray: {
          50: "#f9fbff",
          900: "#0d1624",
          "900_01": "#2a2a2a",
          "700_11": "#55555511",
        },
        red: { A200: "#ff4b4b" },
        blue: { 700: "#1976d2", A700: "#0061ff" },
        colors1: "#0061ffff",
        amber: { 500: "#feb909" },
        colors: "#12282aff",
        colors2: "#130e00ff",
        green: { 600: "#349765" },
      },
      fontFamily: { gilroy: "Gilroy", opensans: "Open Sans" },
      boxShadow: {
        bs: "0px 0px  10px 4px #55555511",
        bs1: "0px 4px  10px 4px #0000000c",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#00000066,#00000066)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
