import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logo = ({ data }) => (
  <Img
    fluid={data.file.childImageSharp.fluid}
    imgStyle={{
      height: 'auto',
      width: 'auto',
      maxWidth: '13.5rem',
      paddingTop: '10px',
      paddingLeft: '4.5rem',
    }}
    placeholderStyle={{
      alignSelf: 'center',
      justifyContent: 'center',
    }}
  />
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo/Wordmark - White.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Logo data={data} {...props} />}
  />
)
