// @flow
import axios from 'axios'
import { call, takeEvery, put } from 'redux-saga/effects'

import { api } from '../constants'
import { type UserType } from '../types'

type FetchUsers = { type: 'Users/fetchUsers' }
type FetchUserSuccess = {
  type: 'Users/fetchUsersSuccess',
  payload: Array<UserType>,
}

export type Action = FetchUsers | FetchUserSuccess

export const actions = {
  fetchUsers(): FetchUsers {
    return { type: 'Users/fetchUsers' }
  },
  fetchUsersSuccess(payload: Array<UserType>): FetchUserSuccess {
    console.log('in success', payload)
    return { type: 'Users/fetchUsersSuccess', payload }
  },
}

function* fetchUsersSaga() {
  try {
    const res = yield call(axios.get, `${api}/users`)
    yield put(actions.fetchUsersSuccess(res.data))
  } catch (e) {
    console.log('error', e)
  }
}

export function* saga(): * {
  console.log('in users saga')
  yield takeEvery('Users/fetchUsers', fetchUsersSaga)
}

export type State = Array<*>

const initialState: State = []

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
