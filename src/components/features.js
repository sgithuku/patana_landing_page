import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import highfive from '../assets/highfive.png'
import message from '../assets/chatting.png'
import group from '../assets/selfie.svg'
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
          <Icon src={message} />
          <BlockTextRight>
            <h3>Never forget to call home</h3>
            <p>
              Sweet, sweet reminders to speak with your friends and family. You
              are in control.
            </p>
          </BlockTextRight>
        </Block>
        <BlockRight>
          <BlockText>
            <h3>Save your memories</h3>
            <p>
              Keep track of upcoming birthdays, anniversaries and little things
              you would otherwise forget.
            </p>
          </BlockText>
          <Icon src={group} />
        </BlockRight>
        <Block>
          <Icon src={highfive} />
          <BlockTextRight>
            <h3>Stay winning</h3>
            <p>Patana has everything you need to keep in touch.</p>
          </BlockTextRight>
        </Block>
      </FeaturesContainer>
    )
  }
}

export default Features
