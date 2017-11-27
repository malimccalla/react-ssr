// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = ({ users }): StateProps => ({ users })
export default connect(mapStateToProps, {
  fetchUsers: actions.fetchUsers,
})(UsersList)
