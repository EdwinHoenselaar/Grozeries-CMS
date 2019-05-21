import * as request from 'superagent'
import { logout } from '../auth/users'
import { isExpired } from '../../jwt'

export const SET_ORDERS = 'SET_ORDERS'

const setOrders = orders => ({
  type: SET_ORDERS,
  payload: orders
})

export const getShopOrders = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`http://grozeries.herokuapp.com/orders/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      console.log('gSO: ',response.body)
      dispatch(setOrders(response.body))
    })
    .catch(err => console.error(err))

}

// .get(`http://grozeries.herokuapp.com/orders/${id}`)