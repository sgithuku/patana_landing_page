import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ec7d64;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23161925' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23f1db84' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23c77264' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23ccc37f' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23a36764' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23a7ab7a' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%237e5b63' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23839474' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23585062' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%235d7e6e' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23284461' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23316868' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-size: cover;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #161925;
`

const NotFoundPage = () => (
  <Wrapper>
    <h3>Looks like you're a little lost.</h3>
    <p>Click on the logo to go back to the homepage</p>
    <Logo />
  </Wrapper>
)

export default NotFoundPage
