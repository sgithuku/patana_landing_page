import React from "react";
import { Link, graphql } from "gatsby";
// import '../components/splitStyles.css'
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import get from "lodash/get";
import Nav from "./nav";
import Features from "./features";
import Contact from "./Contact";
import Footer from "./Footer";
import HeaderImage from "./HeaderImage";
import Badge from "./Badge";
import FeaturedText from "./FeaturedText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  flex-flow: row wrap;
  /* padding-top: 50px; */
  justify-content: center;
  align-items: center;
  height: 90vh;
  min-height: 90vh;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23dddfe7'/%3E%3Cstop offset='1' stop-color='%23dddfe7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23d1d5e7'/%3E%3Cstop offset='1' stop-color='%23d1d5e7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23afb4ce'/%3E%3Cstop offset='1' stop-color='%23afb4ce' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23bbbecf'/%3E%3Cstop offset='1' stop-color='%23bbbecf' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23a2aace'/%3E%3Cstop offset='1' stop-color='%23a2aace' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover; /* background by SVGBackgrounds.com */
  @media (max-width: 900px) {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    /* text-align: center; */
    height: inherit;
    min-height: 0;
    justify-content: flex-start;
    /* flex-direction: column; */
    flex-flow: column-reverse nowrap;
  }
`;

const Feature = styled.div`
  > h2 {
    /* hyphens: auto; */
    /* word-wrap: break-word; */
    /* overflow-wrap: break-word; */
  }
  @media (max-width: 900px) {
    display: inline-flex;
    flex-flow: column nowrap;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-start;
    order: 1;
    padding-top: 30px;
    > h2 {
      text-align: center !important;
      margin-top: 0;
      padding-top: 0;
      /* justify-content: center; */
    }
    > p {
      /* text-align: center; */
    }
  }
`;

const ImgContainer = styled.div`
  /* margin-left: ${props => props.marginLeft}; */
  @media (max-width: 900px) {
    maxHeight: 60vh;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

const Post = styled.div`
  display: flex;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  max-width: ${props => props.maxWidth};
  min-height: 90vh;
  flex-direction: row;
  flex-flow: column wrap;
  padding-top: 50px;
  justify-content: center;
  /* width: 100%; */
  margin: 0 auto;
  color: #161925;
  /* background-color: #fff; */
`;

// https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles#39196525

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    // const mockup = get(this, 'props.data.mockup.childImageSharp.fluid')
    // console.log('blogindex', this.props, mockup)
    // console.log('this.state', this.state)
    // const timer = (this.setState, 3000, { phrase: phrase + 1 })

    let header;

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#161925"
          }}
        >
          <Nav />
          <Container paddingLeft={rhythm(3)} paddingRight={rhythm(3)}>
            <Feature>
              <FeaturedText />
            </Feature>

            <ImgContainer>
              <HeaderImage />
            </ImgContainer>
          </Container>
          <Features />
          <Contact>{children}</Contact>

          <Footer />
        </div>
      );
    } else {
      header = (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#fff"
          }}
        >
          <Nav />
          <Post maxWidth={rhythm(24)}>{children}</Post>
          <Contact />
          <Footer />
        </div>
      );
    }
    return <Wrapper>{header}</Wrapper>;
  }
}

export default Template;
