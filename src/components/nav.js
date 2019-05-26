import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
// import logo from '../assets/logo/Wordmark - White.png'
import Logo from './Logo'

const MenuContainer = styled.div`
  display: block;
  width: 100%;
  background-color: #161925;
  clear: both;
  position: relative;
  font-size: 13px;
  border-bottom: 2px solid #ec7d64;
`
const Menu = styled.div`
  display: inline-flex;
  /* flex-direction: row; */
  flex-flow: row-reverse wrap;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 4.5rem;
  padding-right: 4.5rem;
  width: 100%;
  @media (max-width: 900px) {
    padding: 10px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  box-shadow: none;
  text-decoration: none;
  text-shadow: none;
  background-image: none;
  padding: 10px 30px;
  /* font-size: scale(0.6); */
  @media (max-width: 600px) {
    padding: 10px 10px;
  }
`

const Links = styled.div`
  /* display: inline-flex; */
  align-self: center;
`

const LogoHolder = styled.div`
  flex-grow: 1;
  align-self: flex-start;
  height: 50px;
  @media (max-width: 900px) {
    align-self: center;
  }
`

class Nav extends React.Component {
  render() {
    return (
      <MenuContainer>
        <Menu>
          <Links>
            <StyledLink
              activeStyle={{
                color: '#ec7d64',
              }}
              to={'/'}
            >
              Home
            </StyledLink>
            <StyledLink
              activeStyle={{
                color: '#ec7d64',
              }}
              to={'/About'}
            >
              About
            </StyledLink>
            <StyledLink
              activeStyle={{
                color: '#ec7d64',
              }}
              to={'/FAQ'}
            >
              FAQ
            </StyledLink>
            <StyledLink
              activeStyle={{
                color: '#ec7d64',
              }}
              to={'/Blog'}
            >
              Blog
            </StyledLink>
          </Links>
          <LogoHolder>
            <Logo />
          </LogoHolder>
        </Menu>
      </MenuContainer>
    )
  }
}

export default Nav
