import {USER_LOGOUT, UPDATE_USER} from '../actions/auth/users'
import { lsUserId } from '../constants'

let initialState = null
try {
  const id = localStorage.getItem(lsUserId)
  if (id) {
    initialState = { id }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null

    case UPDATE_USER:
      return payload

    default:
      return state
  }
}
