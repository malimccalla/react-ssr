// @flow
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import type { $Request } from 'express'

import Routes from '../client/Routes'

export default (req: $Request) => {
  const context = {}

  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <Routes />
    </StaticRouter>,
  )

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
