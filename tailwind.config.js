module.exports = {
  // mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        xyz: "#D11919",
        aboutusParagraph: "#A4A7B1",
        contactText: "#999999",
      },
      backgroundColor: {
        primary: "#18191D",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
