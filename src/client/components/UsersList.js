// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { type Store } from 'redux'

import { actions, type State as UsersState } from '../actions'

type ActionProps = {|
  fetchUsers: () => typeof actions.fetchUsers,
|}

type StateProps = {| users: UsersState |}

type Props = ActionProps & StateProps

class UsersList extends Component<Props, void> {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users } = this.props
    return (
      <div>
        Users:
        <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
      </div>
    )
  }
}

function loadData(store: Store<*, *>) {
  return store.dispatch(actions.fetchUsers())
}

const mapStateToProps = ({ users }): StateProps => ({ users })

export { loadData }
export default connect(mapStateToProps, {
  fetchUsers: actions.fetchUsers,
})(UsersList)
