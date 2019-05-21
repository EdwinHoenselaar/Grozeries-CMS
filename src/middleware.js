import {USER_LOGIN_SUCCESS, USER_LOGOUT} from './actions/auth/users'
import {localStorageJwtKey, lsUserId} from './constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      console.log('sdf', action)
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
      localStorage.setItem(lsUserId, action.payload.id)
    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
      localStorage.removeItem(lsUserId)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}
