import Typography from 'typography'
// import lincolnTheme from 'typography-theme-lincoln'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2.2,
  headerFontFamily: ['Nunito', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'sans-serif'],
  bodyWeight: 300,
  blockMarginBottom: 0.5,
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['300', '700'],
      // subset: ['latin-ext'],
    },
  ],
  overrideStyles: () => ({
    'a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    // 'h1,h2,h3,input,button': {
    //   fontFamily: 'Nunito,sans-serif',
    //   fontWeight: '700',
    // },
    // p: {
    //   fontFamily: 'Nunito,sans-serif',
    //   fontWeight: '200',
    // },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
