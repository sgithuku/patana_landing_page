import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  /* float: right; */
  display: inline-block;
  height: 50px;
  @media (max-width: 600px) {
    padding: 0 !important;
  }
`

const Logo = ({ data }) => (
  <StyledLink to={'/'}>
    <Img
      fixed={data.file.childImageSharp.fixed}
      imgStyle={{
        marginRight: '30px',
        marginBottom: '0px',
        padding: '0',
      }}
      placeholderStyle={{
        maxWidth: '100%',
        display: 'block',
        position: 'relative',
        padding: '0',
      }}
    />
  </StyledLink>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo/patana.png" }) {
          childImageSharp {
            fixed(height: 32) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Logo data={data} {...props} />}
  />
)
