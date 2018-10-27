import React, { Children } from 'react'
import { scale, rhythm } from '../utils/typography'
import styled, { keyframes } from 'styled-components'
import Badge from './Badge'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  @media (max-width: 900px) {
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
  color: #161925;
  text-align: left;
  max-width: ${props => props.maxWidth};
  min-width: 500px;
  @media (max-width: 900px) {
    min-width: 0;
    font-size: 1.5rem;
  }
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
    animation: 15s ${show} linear infinite;
    animation-delay: 0s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(2) {
    animation: 15s ${show} linear infinite;
    animation-delay: 3s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(3) {
    animation: 15s ${show} linear infinite;
    animation-delay: 6s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(4) {
    animation: 15s ${show} linear infinite;
    animation-delay: 9s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(5) {
    animation: 15s ${show} linear infinite;
    animation-delay: 12s;
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
        <h3
          style={{
            color: '#161925',
            maxWidth: rhythm(24),
            textAlign: 'left',
            fontWeight: '300',
            paddingBottom: rhythm(1),
          }}
        >
          Patana is an android app that helps you remember{' '}
          <FrameHolder>
            <span>
              <b>to call your granny.</b>
            </span>
            <span>
              {' '}
              <b>to check in with your friend abroad.</b>
            </span>
            <span>
              {' '}
              <b>to text your partner.</b>
            </span>
            <span>
              {' '}
              <b>to call your key customer.</b>
            </span>
            <span>
              {' '}
              <b>
                to message that barista you met at the coffee shop that one
                time.
              </b>
            </span>
          </FrameHolder>
        </h3>

        <Badge />
        <Link
          to={'/'}
          style={{
            color: '#fff',
            textDecoration: 'underline',
            paddingTop: rhythm(1),
          }}
          activeStyle={{ color: '#161925' }}
        >
          or sign up to the newsletter to know when the iOS version will launch
        </Link>
      </Wrapper>
    )
  }
}
