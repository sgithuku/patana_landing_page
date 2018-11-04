import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  /* float: right; */
  display: inline-block;
  height: inherit;
  max-height: 50px;
  @media (max-width: 600px) {
    padding: 0 !important;
  }
`

const Logo = ({ data }) => (
  <StyledLink to={'/'}>
    <Img
      fluid={data.file.childImageSharp.fluid}
      imgStyle={{
        width: 'auto',
        marginTop: '10px',
        marginRight: '30px',
        padding: '0',
        height: '32px',
      }}
      placeholderStyle={{
        maxWidth: '100%',
        // height: 'auto',
        // width: 'auto',
        display: 'block',
        position: 'relative',
        // maxWidth: '13.5rem',
        // justifySelf: 'flexStart',
        padding: '0',
      }}
    />
  </StyledLink>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo/Logo - Alternate Layout - White.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Logo data={data} {...props} />}
  />
)
