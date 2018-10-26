import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: none;
  padding: ${props => props.padding};
  /* margin: 0 auto; */
  flex-direction: row;
  flex-flow: column wrap;
  background-color: #161925;
  color: grey;
  align-items: center;
  font-size: 12px;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer padding={rhythm(1)}>
        &#169; 2019 Patana. All rights reserved.
      </FooterContainer>
    )
  }
}

export default Footer
