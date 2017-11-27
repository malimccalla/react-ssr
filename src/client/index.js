// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Provider } from 'react-redux'

import { rootEpic, rootReducer } from './modules/root'
import Routes from './Routes'

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(rootReducer, {}, applyMiddleware(epicMiddleware))

// $FlowFixMe // https://github.com/facebook/flow/pull/5074
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
)
