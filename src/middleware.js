//GAMESTARTER
import {USER_LOGIN_SUCCESS, USER_LOGOUT} from './actions/auth/users'
import {localStorageJwtKey} from './constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}

//not sure if well need this:

// export const socketIo = socketio => store => next => action => {
//   if (action.type === USER_LOGIN_SUCCESS) {
//     const jwt = action.payload.jwt
//     socketio.connect(store.dispatch, jwt)
//   }
//   if (action.type === USER_LOGOUT) {
//     socketio.disconnect()
//   }

// }
