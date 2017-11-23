// @flow
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

const Home = require('./client/components/Home').default

app.get('/', (req, res) => {
  const content = renderToString(<Home />)
  res.send(content)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
