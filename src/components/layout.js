import React from 'react'
import { Link } from 'gatsby'
import '../components/splitStyles.css'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

import mockup from '../assets/mockup-1.png'
import background from '../assets/bg/beach.jpg'
import google from '../assets/google-play-badge.png'
import Nav from './nav'

const Wrapper = styled.div`
  display: block;
  /* @media (max-width: 700px) {
    background-image: url(${background});
    background-color: transparent;
  } */
`

const Feature = styled.div`
  display: inline-block;
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
            display: 'block',
            // flex: 1,
            flexDirection: 'column',
            width: '100vw',
            backgroundColor: '#161925',
            clear: 'both',
            // flex-flow: 'row wrap',
          }}
        >
          <Nav />
          <div
            style={{
              flex: 1,
              padding: rhythm(3),
              // maxWidth: rhythm(24),
              justifyContent: 'center',
              height: '90vh',
              minHeight: '90vh',
              maxWidth: '100vw',
              backgroundImage: 'url(' + background + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          >
            <div style={{ display: 'inline-block' }}>
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
                  float: 'left',
                  paddingLeft: 0,
                }}
              />
            </div>
            <div
              style={{
                display: 'inline-block',
                float: 'right',
                maxWidth: '30vw',
              }}
            >
              <img
                src={mockup}
                style={{
                  width: '100%',
                  maxWidth: 'inherit',
                  maxHeight: 'inherit',
                }}
              />
            </div>
          </div>
          <div
            style={{
              maxWidth: rhythm(48),
              margin: '0 auto',
              flex: 1,
            }}
          />
          <h2
            style={{
              color: '#fff',
              maxWidth: rhythm(16),
              ...scale(1.5),
            }}
          >
            Features
          </h2>
          <p
            style={{
              color: '#fff',
              maxWidth: rhythm(16),
            }}
          >
            this is a test
          </p>
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
