module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "'Roboto', serif",
      },
      colors: {
        lightBlack: "rgba(0, 0, 0, .8)",
        myBlue: "#3075d6",
      },
      backgroundImage: {
        main: "url('../assets/main-wallpaper.jpg)",
      },
    },
  },
  plugins: [],
};
