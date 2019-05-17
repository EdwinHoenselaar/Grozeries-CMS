import * as request from 'superagent'

export const SET_PRODUCT = 'SET_PRODUCT'

const setProduct = product => ({
  type: SET_PRODUCT,
  payload: product
})

export const setUpdateProduct = (product) => (dispatch) => {
  console.log('send check',product)
  request
    .put(`localhost:4000/products/${product.id}`)
    // .put(`http://grozeries.herokuapp.com/products/${product.id}`)
    .send({
      product
    })
    .then(response => {
      console.log('setUpdateProduct' ,response)
      dispatch(setProduct(response.body))
    })
    .catch(err => console.error(err))

}