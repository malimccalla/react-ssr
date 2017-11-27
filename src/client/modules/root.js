// @flow
import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import users, { usersEpic } from '../actions'

export const rootEpic = combineEpics(usersEpic)

export const rootReducer = combineReducers({
  users,
})
