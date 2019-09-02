import React, { Children } from 'react'
import { scale, rhythm } from '../utils/typography'
import styled, { keyframes } from 'styled-components'
import Badge from './Badge'
import AppleBadge from './BadgeApple'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  @media (max-width: 900px) {
    height: 50%;
    > h2 {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
    > h3 {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    justify-content: space-between;
  }
`

const Header = styled.h2`
  color: #fff;
  text-align: left;
  max-width: ${props => props.maxWidth};
  min-width: 500px;
  @media (max-width: 900px) {
    min-width: 0;
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 400px) {
    text-align: center;
  }
`
const Subtitle = styled.h3`
  text-align: left;
  max-width: ${props => props.maxWidth};
  padding-bottom: ${props => props.paddingBottom};
  color: #fff;
  @media (max-width: 400px) {
    justify-content: center;
    text-align: center;
  }
`

const BadgeHolder = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
`

const show = keyframes`
  0%{
    opacity:0;
    display: none;
    margin-top: -20px;
  }

  7% {
    opacity: 1;
    display:inline;
    margin-top: 0px;
  }

  20% {
    opacity:0;
    display: none;
    margin-top: 0px;
    
  }

  50% {
    opacity: 0;
    display: none;
    
  }
`

const FrameHolder = styled.span`
  /* text-indent: 5px; */
  display: block;
  & span:nth-child(1) {
    animation: 30s ${show} linear infinite;
    animation-delay: 0s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(2) {
    animation: 30s ${show} linear infinite;
    animation-delay: 6s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(3) {
    animation: 30s ${show} linear infinite;
    animation-delay: 12s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(4) {
    animation: 30s ${show} linear infinite;
    animation-delay: 18s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(5) {
    animation: 30s ${show} linear infinite;
    animation-delay: 24s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
`

export default class FeaturedText extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header maxWidth={rhythm(24)}>Build better relationships.</Header>
        <Subtitle maxWidth={rhythm(16)} paddingBottom={rhythm(1)}>
          Patana is an app that helps you remember{' '}
          <FrameHolder>
            <span>to call your granny.</span>
            <span> to check in with your friend abroad.</span>
            <span> to text your partner.</span>
            <span> to call your key customer.</span>
            <span> to message that guy you met on the bus that one time.</span>
          </FrameHolder>
        </Subtitle>

        <BadgeHolder>
          <Badge />
          <AppleBadge />
        </BadgeHolder>
      </Wrapper>
    )
  }
}
