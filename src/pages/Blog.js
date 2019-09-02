import React from 'react'
import styled from 'styled-components'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Helmet from 'react-helmet'
import get from 'lodash/get'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
`
const Container = styled.div`
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  flex-direction: row;
  flex-flow: column wrap;
  padding-top: 50px;
  min-height: 90vh;
  width: ${props => props.width};
  max-width: 100%;
`
const PostList = styled.div`
  padding-top: 50px;
  align-self: center;
  justify-self: center;
  max-width: ${props => props.maxWidth};
`

class Blog extends React.Component {
  render() {
    const siteTitle = 'Patana | Blog'
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    console.log('blog post page: ', this.props)
    // const { children } = this.props
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Wrapper>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Nav />

        <Container
          width={rhythm(30)}
          paddingLeft={rhythm(3)}
          paddingRight={rhythm(3)}
        >
          {/* <PostList maxWidth={rhythm(24)}>{children}</PostList> */}
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                {/* <small>{node.frontmatter.date}</small> */}
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </Container>
        <Contact />
        <Footer />
      </Wrapper>
    )
  }
}
export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
