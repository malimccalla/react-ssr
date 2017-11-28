// @flow
import { combineReducers } from 'redux'

import { all } from 'redux-saga/effects'

import users, { saga as usersSaga } from '../actions'

export function* rootSaga(): * {
  yield all([usersSaga()])
}

export const rootReducer = combineReducers({
  users,
})
