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
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  flex-direction: row;
  flex-flow: column wrap;
  /* padding-top: 50px; */
  justify-content: center;
  min-height: 90vh;
  width: ${props => props.width};
`

class FAQ extends React.Component {
  render() {
    return (
      <Wrapper>
        <Nav />
        <Container>
          <h1>FAQ</h1>
        </Container>
        <Contact />
        <Footer />
      </Wrapper>
    )
  }
}

export default FAQ
