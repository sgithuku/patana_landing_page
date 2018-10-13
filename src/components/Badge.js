import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm, scale } from '../utils/typography'

const Badge = ({ data }) => (
  <Img
    fluid={data.file.childImageSharp.fluid}
    imgStyle={{
      width: rhythm(6),
      height: 'auto',
      alignSelf: 'flex-start',
      paddingLeft: 0,
    }}
  />
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "google-play-badge.png" }) {
          childImageSharp {
            fluid(maxWidth: 360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Badge data={data} {...props} />}
  />
)
