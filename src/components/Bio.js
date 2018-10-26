import React from 'react'
import profilePic from './avatar.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Shaun Githuku`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Built by <strong>Shaun.</strong>
          <br />
          <a href="https://twitter.com/shaun_g">Find me on Twitter</a>
        </p>
      </div>
    )
  }
}

export default Bio
