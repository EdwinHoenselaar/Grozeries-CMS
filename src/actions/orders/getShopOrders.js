import * as request from 'superagent'
import { logout } from '../auth/users'
import { isExpired } from '../../jwt'
import {baseUrl} from '../../constants'

export const SET_ORDERLINES = 'SET_ORDERLINES'

const setOrderlines = orders => ({
  type: SET_ORDERLINES,
  payload: orders
})

export const getShopOrders = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  console.log('getShopOrders', id)
  request
    .get(`${baseUrl}/shops/${id}/orderlines`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      console.log('gSO: ',response.body)
      dispatch(setOrderlines(response.body))
    })
    .catch(err => console.error(err))

}