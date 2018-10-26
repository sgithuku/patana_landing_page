import React from 'react'
import { scale, rhythm } from '../utils/typography'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Nav from '../components/nav'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  width: 100%;
`

const Container = styled.div`
  /* padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight}; */
  padding-right: ${props => props.paddingRight};
  flex-direction: row;
  flex-flow: column wrap;
  justify-content: center;
  /* padding-top: 50px; */
  justify-content: center;
  min-height: 90vh;
  width: ${props => props.width};
`

class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <Nav />
        <Container width={rhythm(30)}>
          <h1>About</h1>
          <p>
            Patana is a little app built to help you better manage and build
            your relationships.
          </p>
          <p>
            It is currently available on Android and should be out on iOS in the
            coming months. Sign up below to know when!{' '}
          </p>
        </Container>
        <Contact />
        <Footer />
      </Wrapper>
    )
  }
}

export default About
