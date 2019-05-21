import { USER_LOGIN_SUCCESS, USER_LOGOUT, UPDATE_USER } from '../actions/auth/users'
import { localStorageJwtKey, lsUserId } from '../constants'

let initialState = null
try {
  const jwt = localStorage.getItem(localStorageJwtKey)
  const id = localStorage.getItem(lsUserId)
  if (jwt && id) {
    initialState = { jwt, id }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default function (state = initialState, {type, payload}) {
	switch (type) {
		case USER_LOGIN_SUCCESS:
			return payload

    case USER_LOGOUT:
      return null

    // case UPDATE_USER:
    //   return payload

		default:
      return state
	}
}
