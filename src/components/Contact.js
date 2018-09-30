import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 30vh;
  overflow: none;
  /* margin: 0 auto; */
  flex-direction: row;
  flex-flow: column wrap;
  background-color: #ec7d64;
  align-items: center;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`

const Input = styled.input`
  padding: 0.5em;
  /* margin: 0.5em; */
  color: #fff;
  background: #161925;
  border: none;
  border-radius: 3px 0 0 3px;
  width: ${props => props.width};
  display: inline-flex;
  @media (max-width: 700px) {
    width: inherit;
  }
`

const Button = styled.button`
  display: inline-flex;
  color: #161925;
  background-color: #9ac4f8;
  /* width: 60px; */
  border-radius: 0 3px 3px 0;
  border: none;
  padding: 0.5em;
`

const Header = styled.h3`
  color: #ffffff;
  /* display: block;
  flex-grow: 1; */
`

class Contact extends React.Component {
  render() {
    return (
      <ContactContainer>
        <Header>Sign up to be the first to test Patana</Header>
        <InputContainer>
          <Input
            placeholder="Email address"
            innerRef={x => {
              this.input = x
            }}
            onMouseEnter={() => this.input.focus()}
            width={rhythm(16)}
          />
          <Button>Submit</Button>
        </InputContainer>
      </ContactContainer>
    )
  }
}

export default Contact
