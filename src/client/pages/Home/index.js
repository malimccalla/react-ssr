// @flow
import * as React from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'

type Props = {||}

class Home extends React.Component<Props, void> {
  render() {
    return (
      <div>
        <Title>Home</Title>
        <Button primary onClick={() => console.log('Hi there')}>
          Press me!
        </Button>
      </div>
    )
  }
}

const Title = styled.h1`
  font-family: sans-serif;
  color: #1e1e1e;
  text-transform: uppercase;
`

export default Home
