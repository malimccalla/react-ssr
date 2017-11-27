// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import { rootEpic, rootReducer } from './modules/root'
import routes from './routes'

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(rootReducer, {}, applyMiddleware(epicMiddleware))

// $FlowFixMe // https://github.com/facebook/flow/pull/5074
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
)
