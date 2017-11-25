// @flow
import React, { Component } from 'react'

import Button from '../../components/Button'

type Props = {||}

class Home extends Component<Props, void> {
  render() {
    return (
      <div>
        <div>Home</div>
        <Button primary onClick={() => console.log('Hi there')}>
          Press me!
        </Button>
      </div>
    )
  }
}

export default Home
