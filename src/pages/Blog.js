import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  width: 100%;
`
const Container = styled.div`
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  flex-direction: row;
  flex-flow: column wrap;
  /* padding-top: 50px; */
  justify-content: center;
  min-height: 90vh;
  width: ${props => props.width};
`

const PostList = styled.div`
  padding-top: 50px;
  align-self: center;
  justify-self: center;
  max-width: ${props => props.maxWidth};
`

export default class Blog extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <PostList maxWidth={rhythm(24)}>{children}</PostList>
      </Wrapper>
    )
  }
}
