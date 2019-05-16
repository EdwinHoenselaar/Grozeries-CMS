import * as request from 'superagent'

export const SET_PRODUCT = 'SET_PRODUCT'

const setProduct = product => ({
  type: SET_PRODUCT,
  payload: product
})

export const setUpdateProduct = (product) => (dispatch) => {
  request
    .put(`http://grozeries.herokuapp.com/products/${product.id}`)
    .send({
      product
    })
    .then(response => {
      console.log('setUpdateProduct' ,response)
      // dispatch(setProduct(response.body))
    })
    .catch(err => console.error(err))

}