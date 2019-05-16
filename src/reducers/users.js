import {USER_LOGOUT, ADD_USER, UPDATE_USER, UPDATE_USERS} from '../actions/auth/users'

export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null
      
    case ADD_USER:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_USER:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_USERS:
      return payload.reduce((users, user) => {
        users[user.id] = user
        return users
      }, {})

    default:
      return state
  }
}
