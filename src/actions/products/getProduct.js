import * as request from 'superagent'
import { baseUrl } from '../../constants';

export const SET_PRODUCT = 'SET_PRODUCT'

const setProduct = product => ({
  type: SET_PRODUCT,
  payload: product
})

export const getProduct = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/products/${id}`)
    .then(response => {
      dispatch(setProduct(response.body))
    })
    .catch(err => console.error(err))

}
