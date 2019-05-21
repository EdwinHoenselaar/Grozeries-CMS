import {USER_LOGOUT, UPDATE_USER} from '../actions/auth/users'

export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null

    case UPDATE_USER:
      return payload

    default:
      return state
  }
}
