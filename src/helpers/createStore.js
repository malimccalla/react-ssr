// @flow
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga, rootReducer } from '../client/modules/root'

const sagaMiddleware = createSagaMiddleware()

export default () => {
  const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)

  return store
}
