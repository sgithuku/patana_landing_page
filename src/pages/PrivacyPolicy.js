import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import Nav from "../components/nav";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #161925;
`;

const Container = styled.div`
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  flex-direction: row;
  flex-flow: column wrap;
  padding-top: 50px;
  min-height: 90vh;
  width: ${props => props.width};
  max-width: 100%;
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const PrivacyPolicy = () => (
  <Wrapper>
    <Nav />
    <Container
      paddingLeft={rhythm(3)}
      paddingRight={rhythm(3)}
      width={rhythm(30)}
    >
      <h2 id="privacy-policy-for-patana">Patana Privacy Policy</h2>
      <p>
        At Patana, accessible from https://patana.app and our mobile app,
        Patana, the privacy of our visitors is one of our main priorities. This
        Privacy Policy document contains the types of information that is
        collected and recorded by Patana and how we use it.
      </p>
      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us at shaun@patana.app
      </p>
      <h3 id="general-data-protection-regulation-gdpr">
        General Data Protection Regulation (GDPR)
      </h3>
      <p>
        We are a Data Controller of your information. Patana is a product of
        BBeta Limited ('Beta"), registered at 71-75 Shelton Street, London,
        Greater London, WC2H 9JQ, Company number 11993574.
      </p>
      <p>
        BBeta's legal basis for collecting and using the personal information
        described in this Privacy Policy depends on the Personal Information we
        collect and the specific context in which we collect the information:
      </p>
      <ul>
        <li>BBeta needs to perform a contract with you</li>
        <li>You have given BBeta permission to do so</li>
        <li>
          Processing your personal information is in BBeta legitimate interests
        </li>
        <li>BBeta needs to comply with the law</li>
      </ul>
      <p>
        BBeta will retain your personal information only for as long as is
        necessary for the purposes set out in this Privacy Policy. We will
        retain and use your information to the extent necessary to comply with
        our legal obligations, resolve disputes, and enforce our policies.
      </p>
      <p>
        If you are a resident of the European Economic Area (EEA), you have
        certain data protection rights. If you wish to be informed what Personal
        Information we hold about you and if you want it to be removed from our
        systems, please contact us. Our Privacy Policy was generated with the
        help of{" "}
        <a href="https://www.gdprprivacypolicy.net.com/">
          GDPR Privacy Policy Generator
        </a>
        .
      </p>
      <p>
        In certain circumstances, you have the following data protection rights:
      </p>

      <ul>
        <li>
          The right to access, update or to delete the information we have on
          you.
        </li>
        <li>The right of rectification.</li>
        <li>The right to object.</li>
        <li>The right of restriction.</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent</li>
      </ul>

      <h3 id="log-files">Log Files</h3>
      <p>
        Patana follows a standard procedure of using log files. These files log
        visitors when they visit websites. All hosting companies do this and a
        part of hosting services' analytics. The information collected by log
        files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking users' movement on
        the website, and gathering demographic information.
      </p>

      <h3 id="cookies-and-web-beacons">Cookies and Web Beacons</h3>
      <p>
        Like any other website, Patana uses 'cookies'. These cookies are used to
        store information including visitors' preferences, and the pages on the
        website that the visitor accessed or visited. The information is used to
        optimize the users' experience by customizing our web page content based
        on visitors' browser type and/or other information.
      </p>

      <h3 id="privacy-policies">Privacy Policies</h3>
      <p>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of Patana.
      </p>
      <p>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on Patana, which are sent directly
        to users' browser. They automatically receive your IP address when this
        occurs. These technologies are used to measure the effectiveness of
        their advertising campaigns and/or to personalize the advertising
        content that you see on websites that you visit.
      </p>
      <p>
        Note that Patana has no access to or control over these cookies that are
        used by third-party advertisers.
      </p>
      <h3 id="third-party-privacy-policies">Third Party Privacy Policies</h3>
      <p>
        Patana's Privacy Policy does not apply to other advertisers or websites.
        Thus, we are advising you to consult the respective Privacy Policies of
        these third-party ad servers for more detailed information. It may
        include their practices and instructions about how to opt-out of certain
        options. You may find a complete list of these Privacy Policies and
        their links here: Privacy Policy Links.
      </p>
      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites. What Are Cookies?
      </p>
      <h3 id="childrens-information">Children's Information</h3>
      <p>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>
      <p>
        Patana does not knowingly collect any Personal Identifiable Information
        from children under the age of 13. If you think that your child provided
        this kind of information on our website, we strongly encourage you to
        contact us immediately and we will do our best efforts to promptly
        remove such information from our records.
      </p>
      <h3 id="online-privacy-policy-only">Online Privacy Policy Only</h3>
      <p>
        Our Privacy Policy created at GDPRPrivacyPolicy.net) applies only to our
        online activities and is valid for visitors to our website with regards
        to the information that they shared and/or collect in Patana. This
        policy is not applicable to any information collected offline or via
        channels other than this website.{" "}
        <a href="https://gdprprivacypolicy.net">Our GDPR Privacy Policy</a> was
        generated with the help of the GDPR Privacy Policy Generator.
      </p>
      <h3 id="consent">Consent</h3>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>
    </Container>
    <Footer />
  </Wrapper>
);

export default PrivacyPolicy;
