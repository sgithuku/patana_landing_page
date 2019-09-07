import Typography from "typography";
// import lincolnTheme from 'typography-theme-lincoln'

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  scaleRatio: 2.2,
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: [
    "Courier New",
    "Courier",
    "Lucida Sans Typewriter",
    "Lucida Typewriter",
    "monospace"
  ],
  bodyWeight: 400,
  // blockMarginBottom: 0.5,
  googleFonts: [
    {
      name: "Nunito",
      styles: ["300", "700"]
      // subset: ['latin-ext'],
    }
  ],
  overrideStyles: ({ scale }) => ({
    "a.gatsby-resp-image-link": {
      boxShadow: "none"
    },
    h2: {
      color: "#161925"
    },
    a: {
      textDecoration: "none",
      color: "#ec7d64"
    },
    "a:hover": {
      // textDecoration: 'underline',
      fontWeight: "700"
    }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
