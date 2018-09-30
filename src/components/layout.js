import React from 'react'
import { Link } from 'gatsby'
import '../components/splitStyles.css'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

import mockup from '../assets/mockup-1.png'
import background from '../assets/bg/beach.jpg'
import google from '../assets/google-play-badge.png'
import Nav from './nav'
import Features from './features'
import Contact from './Contact'
import Footer from './Footer'

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
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
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
  height: 100%;
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
                  color: '#fff',
                  textAlign: 'left',
                  maxWidth: rhythm(16),
                }}
              >
                Build better relationships.
              </h2>
              <p style={{ color: '#fff', maxWidth: rhythm(16) }}>
                Patana can help you remember to call your granny. Text your
                partner. Keep in touch with your friends from university. And
                much more.
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
              paddingBottom: rhythm(3),
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
          >
            <Features />
          </div>
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
