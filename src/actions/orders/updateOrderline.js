import * as request from 'superagent'
import { logout } from '../auth/users'
import { isExpired } from '../../jwt'

export const SET_ORDERLINE = 'SET_ORDERLINE'

const setOrderline = orders => ({
  type: SET_ORDERLINE,
  payload: orders
})

export const updateOrderline = (id, status) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .put(`http://grozeries.herokuapp.com/orderlines/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(status)
    .then(response => {
      console.log('update orderline',response.body)
      dispatch(setOrderline(response.body))
    })
    .catch(err => console.error(err))

}