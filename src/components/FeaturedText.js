import React, { Children } from "react";
import { scale, rhythm } from "../utils/typography";
import styled, { keyframes } from "styled-components";

import { Link } from "gatsby";

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
`;

const Header = styled.h2`
  color: #161925;
  text-align: left;
  max-width: ${props => props.maxWidth};
  min-width: 500px;
  font-size: 3rem;
  @media (max-width: 900px) {
    min-width: 0;
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 400px) {
    text-align: center;
  }
`;
const Subtitle = styled.h3`
  text-align: left;
  max-width: ${props => props.maxWidth};
  padding-bottom: ${props => props.paddingBottom};
  color: #fff;
  font-weight: normal;
  display: grid;
  @media (max-width: 400px) {
    text-align: center;
  }
`;

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
`;

const FrameHolder = styled.span`
  display: grid;
  @media (max-width: 400px) {
    text-align: center;
  }
  & span:nth-child(1) {
    animation: 40s ${show} ease-out infinite;
    animation-delay: 0s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(2) {
    animation: 40s ${show} ease-out infinite;
    animation-delay: 8s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(3) {
    animation: 40s ${show} ease-out infinite;
    animation-delay: 16s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(4) {
    animation: 40s ${show} ease-out infinite;
    animation-delay: 24s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
  & span:nth-child(5) {
    animation: 40s ${show} ease-out infinite;
    animation-delay: 32s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }
`;

const DownloadButton = styled.button`
  text-align: center;
  padding-horizontal: ${props => props.paddingHorizontal};
  width: ${props => props.defaultWidth};
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  justify-content: center;
  border: 1px;
  box-shadow: 0 3px 3px 0 #7e3e3f;
  background-image: linear-gradient(45deg, #161925, #373547);
  @media (max-width: 400px) {
    display: none;
  }

  :hover {
    background-color: #3d4665;
    > a {
      color: #fff;
      font-weight: 400;
    }
  }
`;

export default class FeaturedText extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header maxWidth={rhythm(24)}>Build better relationships.</Header>
        <Subtitle maxWidth={rhythm(24)} paddingBottom={rhythm(1)}>
          Patana is an app that helps you remember{" "}
          <FrameHolder>
            <span> to call your granny.</span>
            <span> to check in with your friend abroad.</span>
            <span> to text your partner.</span>
            <span> to call your key customer.</span>
            <span> to message that guy you met on the bus that one time.</span>
          </FrameHolder>
        </Subtitle>
        <DownloadButton paddingHorizontal={rhythm(3)} defaultWidth={rhythm(12)}>
          <Link to="#Download">Download</Link>
        </DownloadButton>
      </Wrapper>
    );
  }
}
