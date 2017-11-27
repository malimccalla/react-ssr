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

  const actions = matchRoutes(routes, req.path).map(
    ({ route }) => (route.loadData ? route.loadData(store) : null),
  )

  let currentValue
  function handleChange() {
    const previousValue = currentValue
    currentValue = store.getState()

    if (previousValue !== currentValue) {
      console.log('state changed from', previousValue, 'to', currentValue)
    }
  }

  store.subscribe(handleChange)

  setTimeout(() => {
    console.log('delayed store', store.getState())
    res.send(renderer(req, store))
  }, 500)

  console.log('actions to load data', actions)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
