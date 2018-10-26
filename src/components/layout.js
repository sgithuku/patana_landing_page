import React from 'react'
import { Link, graphql } from 'gatsby'
// import '../components/splitStyles.css'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'
import get from 'lodash/get'
import Nav from './nav'
import Features from './features'
import Contact from './Contact'
import Footer from './Footer'
import HeaderImage from './HeaderImage'
import Badge from './Badge'
import FeaturedText from './FeaturedText'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

const Container = styled.div`
  display: flex;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  flex-direction: row;
  flex-flow: column wrap;
  /* padding-top: 50px; */
  justify-content: center;
  height: 90vh;
  min-height: 90vh;
  width: 100%;
  margin: 0 auto;
  background-color: #ec7d64;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23161925' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23f1db84' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23c77264' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23ccc37f' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23a36764' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23a7ab7a' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%237e5b63' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23839474' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23585062' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%235d7e6e' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23284461' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23316868' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  /* background by SVGBackgrounds.com */
  @media (max-width: 900px) {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    height: inherit;
    min-height: 0;
    justify-content: flex-start;
    /* flex-direction: column; */
    flex-flow: column-reverse nowrap;
  }
`

const Feature = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  > h2 {
    /* hyphens: auto; */
    /* word-wrap: break-word; */
    /* overflow-wrap: break-word; */
  }
  @media (max-width: 900px) {
    display: inline-flex;
    flex-flow: column nowrap;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-start;
    order: 1;
    padding-top: 30px;
    > h2 {
      text-align: center !important;
      margin-top: 0;
      padding-top: 0;
      font-size: 3rem !important;
      line-height: 3rem !important;
    }
    > p {
      text-align: center;
    }
  }
`

const ImgContainer = styled.div`
  /* position: relative; */
  display: inline-flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  height: 90%;
  /* max-width: 30vw; */
  /* margin-left: ${props => props.marginLeft}; */
  @media (max-width: 900px) {
    maxHeight: 60vh;
  }
`

const Post = styled.div`
  display: flex;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  max-width: ${props => props.maxWidth};
  min-height: 90vh;
  flex-direction: row;
  flex-flow: column wrap;
  padding-top: 50px;
  justify-content: center;
  /* width: 100%; */
  margin: 0 auto;
  color: #161925;
  /* background-color: #fff; */
`

// https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles#39196525

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // const mockup = get(this, 'props.data.mockup.childImageSharp.fluid')
    // console.log('blogindex', this.props, mockup)
    // console.log('this.state', this.state)
    // const timer = (this.setState, 3000, { phrase: phrase + 1 })

    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#161925',
          }}
        >
          <Nav />
          <Container paddingLeft={rhythm(3)} paddingRight={rhythm(3)}>
            <Feature>
              <FeaturedText />
            </Feature>

            <ImgContainer>
              <HeaderImage />
            </ImgContainer>
          </Container>

          <div
            style={{
              margin: '0 auto',
              flex: 1,
              paddingLeft: rhythm(3),
              paddingRight: rhythm(3),
              justifyContent: 'center',
              width: '100%',
              backgroundColor: '#fff',
            }}
          />
          <Features />
          <Contact>{children}</Contact>

          <Footer />
        </div>
      )
    } else {
      header = (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#fff',
          }}
        >
          <Nav />
          <Post maxWidth={rhythm(24)}>{children}</Post>
          <Contact />
          <Footer />
        </div>
      )
    }
    return <Wrapper>{header}</Wrapper>
  }
}

export default Template
