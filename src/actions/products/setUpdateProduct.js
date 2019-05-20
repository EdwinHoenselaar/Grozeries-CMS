import * as request from 'superagent'
import { baseUrl } from '../../constants'
import { logout } from '../auth/users'
import { isExpired } from '../../jwt'
import toastr from 'toastr'

export const SET_PRODUCT = 'SET_PRODUCT'

const setProduct = product => ({
  type: SET_PRODUCT,
  payload: product
})

export const setUpdateProduct = (product) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .put(`${baseUrl}/products/${product.id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(product)
    .then(response => {
      console.log('toastr test', response)
      response.status === 200 ? toastr.success('Product succesfully updated') : toastr.error('Something went wrong, product is not updated')
      dispatch(setProduct(response.body))
    })
    .catch(err => console.error(err))
}