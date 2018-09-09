import React from 'react'
import { Link } from 'gatsby'
import '../components/splitStyles.css'

import { rhythm, scale } from '../utils/typography'
import SplitPane from 'react-split-pane'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <SplitPane split="vertical" minSize={50} defaultSize={'50%'}>
          <div
            style={{
              backgroundColor: '#161925',
              height: '100%',
              marginTop: 0,
              // flexDirection: 'row',
              // flex: 1,
              // alignContent: 'center',
              // alignItems: 'center',
              // justifyContent: 'center',
            }}
          >
            <h1
              style={{
                ...scale(1.5),
                marginBottom: rhythm(1.5),
                marginTop: 0,
                color: '#fff',
                alignSelf: 'center',
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                  textShadow: 'none',
                  justifyContent: 'center',
                }}
                to={'/'}
              >
                Patana
              </Link>
            </h1>
            <h2 style={{ color: '#fff' }}>
              Build better relationships. Auto-magically.
            </h2>
          </div>
          <div>
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              Patana
            </Link>
          </div>
        </SplitPane>
      )
    } else {
      header = (
        <h3
          style={{
            // fontFamily: 'Nunito, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Patana
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          paddingTop: 0,
        }}
      >
        {header}
      </div>
    )
  }
}

export default Template
