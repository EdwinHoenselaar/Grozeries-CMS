import * as request from 'superagent'
import {baseUrl} from '../../constants'
import {isExpired} from '../../jwt'
import { toaster } from 'evergreen-ui'

export const UPDATE_USER = 'UPDATE_USER'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const logout = () => ({
  type: USER_LOGOUT
})

const userLoginSuccess = (login) => ({
  type: USER_LOGIN_SUCCESS,
  payload: login
})

const userLoginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error || 'Unknown error'
})

const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user
})

export const login = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/logins`)
        .send({email, password})
        .then(result => {
            console.log('user object',result.body)
            dispatch(userLoginSuccess(result.body))
            toaster.success('Log in succesful.')
        })
        .catch(err => {
            if (err.status === 400) {
                dispatch(userLoginFailed(err.response.body.message))
            }
            else {
                console.error(err)
            }
    })

export const getUser = (id) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/users/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      console.log('result ', result)
      dispatch(updateUser(result.body))})
    .catch(err => console.error(err))
}
