// @flow
import axios from 'axios'
import { combineEpics } from 'redux-observable'
import { type Observable } from 'rxjs'

import { api } from '../constants'
import { type UserType } from '../types'

// TYPES
type FetchUsers = { type: 'Users/fetchUsers' }
type FetchUserSuccess = {
  type: 'Users/fetchUsersSuccess',
  payload: Array<UserType>,
}

export type Action = FetchUsers | FetchUserSuccess
// ACTIONS CREATORS

export const actions = {
  fetchUsers(): FetchUsers {
    return { type: 'Users/fetchUsers' }
  },
  fetchUsersSuccess(payload: Array<UserType>): FetchUserSuccess {
    return { type: 'Users/fetchUsersSuccess', payload }
  },
}

// EPICS
const fetchUsersEpic = (actions$: Observable<*>) =>
  actions$
    .filter((action: Action) => action.type === 'Users/fetchUsers')
    .mergeMap((action: Action) => axios.get(`${api}/users`))
    .map(response => actions.fetchUsersSuccess(response.data))

export const usersEpic = combineEpics(fetchUsersEpic)

// STATE
export type State = Array<*>

const initialState: State = []

// REDUCER
export default function reducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case 'Users/fetchUsersSuccess':
      return action.payload
    default:
      return state
  }
}
