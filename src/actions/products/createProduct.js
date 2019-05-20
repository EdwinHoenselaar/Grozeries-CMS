import * as request from 'superagent'
import { baseUrl } from '../../constants'
import { logout } from '../auth/users'
import { isExpired } from '../../jwt'
import toastr from 'toastr'

export const ADD_PRODUCT = 'ADD_PRODUCT'

const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
})

export const createProduct = (product) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/shops/1`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(product)
    .then(response => {
      response.status === 200 ? toastr.success('Product succesfully updated') : toastr.error('Something went wrong, product is not updated')
      dispatch(addProduct(response.body))
    })
    .catch(err => console.error(err))
}