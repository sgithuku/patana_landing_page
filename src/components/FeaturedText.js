import React from 'react'
import { scale, rhythm } from '../utils/typography'
import styled from 'styled-components'
import Badge from './Badge'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Container = styled.div`
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  flex-direction: row;
  flex-flow: column wrap;
  /* padding-top: 50px; */
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 90vh;
  width: ${props => props.width};
  @media (max-width: 900px) {
    min-height: inherit;
  }
`
const phrases = [
  'call your granny.',
  'check in with your friend abroad.',
  'text your partner.',
  'call a customer.',
  'message that barista you met at the coffee shop that one time.',
]

export default class FeaturedText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phrase: 'call your granny',
      currentPhrase: 0,
    }
  }

  componentDidMount() {
    // console.log(phrases.length)
    setInterval(i => {
      const l = phrases.length
      if (this.state.currentPhrase === l - 1) {
        this.setState({ phrase: phrases[l - 1] })
        this.setState({ currentPhrase: 0 })
      } else {
        this.setState({ currentPhrase: this.state.currentPhrase + 1 })
        this.setState({ phrase: phrases[this.state.currentPhrase] })
      }
    }, 3000)
  }

  // TODO: Figure out how to unmount a setInterval timer
  //   componentWillUnmount() {
  //     setTimeout(){
  //         return
  //     },0)
  //   }

  render() {
    return (
      <Wrapper>
        <h2
          style={{
            color: '#161925',
            textAlign: 'left',
            maxWidth: rhythm(24),
          }}
        >
          Build better relationships.
        </h2>
        <h3
          style={{
            color: '#161925',
            maxWidth: rhythm(24),
            textAlign: 'left',
            fontWeight: '300',
          }}
        >
          Patana is an android app that helps you remember to{' '}
          <b>{this.state.phrase}</b>
        </h3>
        {/* <p>{this.state.phrase}</p> */}

        <Badge />
      </Wrapper>
    )
  }
}
