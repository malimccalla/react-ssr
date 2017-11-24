// @flow
import express, { type $Request, type $Response } from 'express'

import renderer from './helpers/renderer'

const app = express()

app.use(express.static('public'))

app.get('*', (req: $Request, res: $Response) => {
  res.send(renderer(req))
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
