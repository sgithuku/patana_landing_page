import Typography from 'typography'
import lincolnTheme from 'typography-theme-Lincoln'

lincolnTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'h1,h2,h3': {
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
  p: {
    fontFamily: 'Nunito',
    fontWeight: '400',
  },
})

delete lincolnTheme.googleFonts

const typography = new Typography(lincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
