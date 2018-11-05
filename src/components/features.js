import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import highfive from '../assets/highfive.png'
import message from '../assets/chatting.png'
import group from '../assets/selfie.svg'
import bullet from '../assets/logo/Logo.png'
import { rhythm, scale } from '../utils/typography'
import Brain from '../assets/icons/brain.svg'
import Bell from '../assets/icons/bell.svg'
// import Calendar from '../assets/icons/calendar.svg'
import Heart from '../assets/icons/heart.svg'

const FeaturesContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: none;
  /* margin: 0 auto; */
  flex-direction: row;
  flex-flow: column wrap;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: inherit;
    padding-left: 0;
    padding-right: 0;
    flex-direction: column;
  }
`

const Block = styled.div`
  padding-top: 10vh;
  padding-bottom: 10vh;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  & li {
    padding-left: 10px;
  }
  @media (max-width: 700px) {
    flex-flow: column nowrap;
  }
`
const BlockRight = styled.div`
  padding-top: 10vh;
  padding-bottom: 10vh;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: #32746d;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23c77264' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23a36764' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%237e5b63' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23585062' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23284461' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23253b54' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23213248' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%231e293c' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%231a2130' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23161925' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E"); */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23a72fbd'/%3E%3Cstop offset='1' stop-color='%23a72fbd' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23953096'/%3E%3Cstop offset='1' stop-color='%23953096' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23212c41'/%3E%3Cstop offset='1' stop-color='%23212c41' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ec7d64'/%3E%3Cstop offset='1' stop-color='%23ec7d64' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23284461'/%3E%3Cstop offset='1' stop-color='%23284461' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23161925'/%3E%3Cstop offset='1' stop-color='%23161925' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  @media (max-width: 700px) {
    flex-flow: column-reverse nowrap;
  }
`
const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: left;
  max-width: ${props => props.maxWidth};
  @media (max-width: 700px) {
    /* text-align: center; */
  }
`

const BlockTextRight = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 30vw; */
  align-items: flex-start;
  text-align: left;
  max-width: ${props => props.maxWidth};
  > h3 {
    display: flex;
  }
  @media (max-width: 700px) {
    /* text-align: center; */
    align-items: center;

    > h3 {
      /* text-align: center !important; */
    }
  }
`

const Icon = styled.img`
  height: auto;
  max-width: 40vw;
`

const SVG = styled.img`
  height: auto;
  min-width: 40px;
  margin: 0 10px;
`

// const text = styled.p`
//   text-align: center;
//   display: block;
//   clear: both;
// `

class Features extends React.Component {
  render() {
    return (
      <FeaturesContainer>
        <Block paddingLeft={rhythm(3)} paddingRight={rhythm(3)}>
          <Icon src={message} />
          <BlockTextRight maxWidth={rhythm(16)}>
            <h3>
              <SVG src={Bell} />
              Never forget to call or message your friends and family
            </h3>
            <p>
              With Patana, you can easily set up regular reminders to get in
              touch with friends and family.
            </p>
            <p>
              Notifications are easy to set up so that you don't miss another
              birthday, anniversary, or important event.
            </p>
            {/* <ul>
              <li>Automatically set up reminders for contacts you choose</li>
              <li>Adjust how frequently you want to speak to them</li>
              <li>Set important dates and receive notifications on the day</li>
              <li>Categories to keep you even more organised</li>
              <li>
                Calendar view gives you a global view of all your upcoming
                notifications
              </li>
            </ul> */}
          </BlockTextRight>
        </Block>
        <BlockRight paddingLeft={rhythm(3)} paddingRight={rhythm(3)}>
          <BlockText maxWidth={rhythm(16)}>
            <h3>
              <SVG src={Brain} />
              Store your notes, memories, and ideas. Privately.
            </h3>
            <p>
              More than just keeping up with your friends,{' '}
              <b>Patana helps you remember important things</b> - whether it was
              that funny photo, a great gift idea you don't want to forget, or
              even a little reminder that your boss is a big football fan.
            </p>
            <p>
              Keep all your contacts
              <b>easily organised and update contacts within the app.</b>
            </p>
            <p>
              This information is all stored <b>securely</b> for you only.{' '}
            </p>
            {/* <ul>
              <li>
                Keep track of upcoming birthdays, anniversaries and other
                important dates
              </li>
              <li>Keep quick notes about your friends</li>
              <li>Your data is kept securely in the app</li>
            </ul> */}
            <p />
          </BlockText>
          <Icon src={group} />
        </BlockRight>
        <Block paddingLeft={rhythm(3)} paddingRight={rhythm(3)}>
          <Icon src={highfive} />
          <BlockTextRight maxWidth={rhythm(16)}>
            <h3>
              <SVG src={Heart} />
              Made with love
            </h3>
            <p>
              Patana is designed, developed, and maintained to (hopefully) help
              you build better relationships with the people that matter most.
            </p>
          </BlockTextRight>
        </Block>
      </FeaturesContainer>
    )
  }
}

export default Features
