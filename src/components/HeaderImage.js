import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// const mockup = get(this, 'props.data.mockup.childImageSharp.fluid')

const HeaderImage = ({ data }) => (
  <Img
    fluid={data.file.childImageSharp.fluid}
    imgStyle={{
      marginTop: '0',
      marginBottom: '0',
      marginLeft: 'auto',
      marginRight: 'auto',
      justifySelf: 'center',
      alignSelf: 'center',
    }}
    style={{
      position: 'relative',
      width: '100%',
    }}
  />
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "demos/Pixel-group-2.png" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderImage data={data} {...props} />}
  />
)

// export default HeaderImage
