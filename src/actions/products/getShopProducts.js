import * as request from 'superagent'
import { logout } from '../auth/users'
import { isExpired } from '../../jwt'
import {baseUrl} from '../../constants'

export const SET_SHOP = 'SET_SHOP'

const setShop = products => ({
  type: SET_SHOP,
  payload: products
})

export const getShopProducts = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/shops/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(setShop(response.body))
    })
    .catch(err => console.error(err))

}