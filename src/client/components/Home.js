// @flow
import React from 'react'

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <button
        onClick={() => {
          console.log('hello')
        }}
      >
        Press me!
      </button>
    </div>
  )
}

export default Home
