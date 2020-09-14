import Typography from "typography"

const typography = new Typography({
  // baseFontSize: "18px",
  // baseLineHeight: 1.666,
  headerFontFamily: ["Hind"],

  bodyFontFamily: ["Lato"],
  overrideStyles: ({ adjustFontSizeTo }, options, styles) => ({
    "header a": {
      fontFamily: "Hind",
    },
    h1: {
      fontWeight: 300,
      textTransform: "uppercase",
      fontSize: "1.6rem",
    },
  }),
  googleFonts: [
    {
      name: "Hind",
      styles: ["300", "400", "700"],
    },
    {
      name: "Lato",
      styles: ["300", "400", "700"],
    },
  ],
})

export default typography
