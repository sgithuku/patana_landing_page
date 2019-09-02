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
import bgimg from "../assets/bg/Background-img-resized.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ec7d64;
`;

const Container = styled.div`
  background-image: url(${bgimg});
  background-repeat: no-repeat;
  background-attachnment: fixed;
  background-position: right center;
  background-clip: padding-box;

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
  width: 80%;
  margin: 0 auto;
  @media (max-width: 900px) {
    background-image: none;
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
    justify-content: flex-start;
    order: 1;
    padding-top: 30px;
    padding-bottom: 30px;

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
    max-height: 60vh;
  }
  @media (max-width: 600px) {
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
  color: #fff;
  @media (max-width: 400px) {
    display: none;
    padding-left: 30px;
    padding-right: 30px;
  }
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
            width: "100%"
          }}
        >
          <Nav />
          <Container paddingLeft={rhythm(3)} paddingRight={rhythm(3)}>
            <Feature>
              <FeaturedText />
            </Feature>
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
