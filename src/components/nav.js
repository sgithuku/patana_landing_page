import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import logo from '../assets/logo/Wordmark - White.png'

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`
const Menu = styled.div`
  position: relative;
  display: block;
  /* max-width: rhythm(24); */
  margin: 0 auto;
`

const StyledLink = styled(Link)`
  float: right;
  color: #fff;
  box-shadow: none;
  text-decoration: none;
  font-family: 'Nunito';
  text-shadow: none;
  background-image: none;
  padding: 10px 30px;
  /* font-size: scale(0.6); */
`

class Nav extends React.Component {
  render() {
    return (
      <MenuContainer>
        <Menu
          style={{
            // maxWidth: rhythm(48),
            paddingRight: rhythm(3),
            paddingLeft: rhythm(3),
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              float: 'left',
              height: '30px',
              width: 'auto',
              paddingTop: '10px',
            }}
          />
          <StyledLink
            activeStyle={{
              color: '#EC7D64',
            }}
            to={'/About'}
          >
            About
          </StyledLink>
          <StyledLink
            activeStyle={{
              color: '#EC7D64',
            }}
            to={'/FAQ'}
          >
            FAQ
          </StyledLink>
          <StyledLink
            activeStyle={{
              color: '#EC7D64',
            }}
            to={'/'}
          >
            Home
          </StyledLink>{' '}
        </Menu>
      </MenuContainer>
    )
  }
}

export default Nav
