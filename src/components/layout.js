import React from 'react'
import { Link } from 'gatsby'
import '../components/splitStyles.css'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

import mockup from '../assets/demos/Pixel-group-2.png'
import background from '../assets/bg/beach.jpg'
import google from '../assets/google-play-badge.png'
import Nav from './nav'
import Features from './features'
import Contact from './Contact'
import Footer from './Footer'

// options = ['call grandma', 'text your partner', 'message your client']

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* @media (max-width: 700px) {
    background-image: url(${background});
    background-color: transparent;
  } */
`

const Container = styled.div`
  display: flex;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  flex-direction: row;
  flex-flow: column wrap;
  padding-top: 50px;
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
  @media (max-width: 700px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`

const Feature = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  /* margin-left: ${props => props.marginLeft}; */
  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
  }
`

const ImgContainer = styled.div`
  display: inline-flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  height: 90%;
  /* max-width: 30vw; */
  /* margin-left: ${props => props.marginLeft}; */
  @media (max-width: 700px) {
    display: none;
  }
`

// https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles#39196525

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
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
            {/* <Feature marginLeft={rhythm(3)}> */}
            <Feature>
              <h2
                style={{
                  ...scale(2),
                  color: '#161925',
                  textAlign: 'left',
                  maxWidth: rhythm(16),
                }}
              >
                Build better relationships.
              </h2>
              <p style={{ color: '#161925', maxWidth: rhythm(16) }}>
                Patana can help you remember to call your granny. Text your
                partner. Keep in touch with your friends. And much more.
              </p>
              <p style={{ color: '#161925', maxWidth: rhythm(16) }}>
                Save notes, important dates, set reminders, and track upcoming
                events the easy way.
              </p>
              <img
                src={google}
                style={{
                  maxWidth: rhythm(6),
                  alignSelf: 'flex-start',
                  paddingLeft: 0,
                }}
              />
            </Feature>

            {/* <ImgContainer marginLeft={rhythm(3)}> */}
            <ImgContainer>
              <img
                src={mockup}
                style={{
                  // width: '100%',
                  maxWidth: 'inherit',
                  maxHeight: '100%',
                  justifySelf: 'center',
                  alignSelf: 'center',
                }}
              />
            </ImgContainer>
          </Container>

          {/* Second section */}

          <div
            style={{
              // maxWidth: rhythm(48),
              margin: '0 auto',
              flex: 1,
              paddingLeft: rhythm(3),
              paddingRight: rhythm(3),
              // maxWidth: rhythm(24),
              justifyContent: 'center',
              // height: '90vh',
              // minHeight: '90vh',
              width: '100%',
              backgroundColor: '#fff',
              // backgroundImage: 'url(' + background + ')',
              // backgroundSize: 'cover',
              // backgroundPosition: 'bottom',
            }}
          />
          <Features />
          <Contact />
          <Footer />
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Patana
          </Link>
        </h3>
      )
    }
    return <Wrapper>{header}</Wrapper>
  }
}

export default Template
