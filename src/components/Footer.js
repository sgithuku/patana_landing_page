import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: none;
  padding: ${props => props.padding};
  /* margin: 0 auto; */
  flex-direction: row;
  flex-flow: row wrap;
  background-color: #161925;
  color: grey;
  align-items: center;
  font-size: 12px;
`;
const StyledLink = styled(Link)`
  /* float: right; */
  display: inline-flex;
  height: inherit;
  max-height: 50px;
  @media (max-width: 600px) {
    padding: 0 !important;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer padding={rhythm(1)}>
        &#169; 2019 Patana. All rights reserved |
        <StyledLink to={"PrivacyPolicy"}>Privacy Policy </StyledLink>
      </FooterContainer>
    );
  }
}

export default Footer;
