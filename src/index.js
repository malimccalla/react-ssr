// @flow
import express, { type $Request, type $Response } from 'express'
import { matchRoutes } from 'react-router-config'

import routes from './client/routes'
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'

const app = express()

app.use(express.static('public'))

app.get('*', (req: $Request, res: $Response) => {
  const store = createStore()

  matchRoutes(routes, req.path).map(
    ({ route }) => (route.loadData ? route.loadData(store) : null),
  )

  // figure out how to render once all observable tasks finish
  setTimeout(() => {
    console.log('delayed store', store.getState())
    res.send(renderer(req, store))
  }, 500)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
