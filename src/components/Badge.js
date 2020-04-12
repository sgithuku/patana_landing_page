import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: inline-flex;
  height: 50px;
  width: inherit;
  @media (max-width: 600px) {
    padding: 0 !important;
  }
`

const Badge = ({ data }) => (
  <StyledLink to={'/'}>
    <Img
      fixed={data.file.childImageSharp.fixed}
      imgStyle={{
        width: rhythm(7),
        height: 'auto',
        alignSelf: 'flex-start',
        paddingLeft: 0,
      }}
      placeholderStyle={{
        display: 'block',
        position: 'relative',
        // width: 'auto',
      }}
    />
  </StyledLink>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "google-play-badge.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Badge data={data} {...props} />}
  />
)
