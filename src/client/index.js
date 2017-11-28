// @flow
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import { rootSaga, rootReducer } from './modules/root'
import routes from './routes'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

// $FlowFixMe // https://github.com/facebook/flow/pull/5074
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
)
