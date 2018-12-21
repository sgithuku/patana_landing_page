import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  /* float: right; */
  display: inline-flex;
  height: inherit;
  max-height: 50px;
  @media (max-width: 600px) {
    padding: 0 !important;
  }
`

const AppleBadge = ({ data }) => (
  <StyledLink to={'/'}>
    <Img
      fluid={data.file.childImageSharp.fluid}
      imgStyle={{
        width: rhythm(6),
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
        file(relativePath: { eq: "AppleBadge.svg" }) {
          childImageSharp {
            fluid(maxWidth: 360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <AppleBadge data={data} {...props} />}
  />
)
