import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import lost from '../assets/lost-trans.png'
import message from '../assets/undraw_messaging_uok8.png'
import group from '../assets/undraw_hang_out_h9ud.png'
import { rhythm, scale } from '../utils/typography'

const FeaturesContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: none;
  /* margin: 0 auto; */
  flex-direction: row;
  flex-flow: column wrap;
  background-color: #ffffff;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
`

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const BlockRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: inherit;
    padding-left: 0;
    padding-right: 0;
  }
  > p {
    /* max-width: 30vw; */
  }
`

const BlockTextRight = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 30vw; */
  align-items: flex-end;
  @media (max-width: 700px) {
    width: inherit;
    padding-left: 0;
    padding-right: 0;
  }
  > p {
    text-align: right;
  }
  > h3 {
    text-align: right;
  }
`

const Icon = styled.img`
  height: auto;
  max-width: 40vw;
`

const text = styled.p`
  text-align: center;
  display: block;
  clear: both;
`

class Features extends React.Component {
  render() {
    return (
      <FeaturesContainer paddingLeft={rhythm(3)} paddingRight={rhythm(3)}>
        <Block>
          <Icon src={lost} />
          <BlockTextRight>
            <h3>Notifications you control</h3>
            <p>Sweet, sweet reminders to speak with your friends and family</p>
          </BlockTextRight>
        </Block>
        <BlockRight>
          <BlockText>
            <h3>Events calendar</h3>
            <p>
              Keep track of upcoming birthdays, anniversaries and anything else
              you want to remember.
            </p>
          </BlockText>
          <Icon src={group} />
        </BlockRight>
        <Block>
          <Icon src={message} />
          <BlockTextRight>
            <h3>Secure</h3>
            <p>Your data is yours and is not stored on our servers.</p>
          </BlockTextRight>
        </Block>
      </FeaturesContainer>
    )
  }
}

export default Features
