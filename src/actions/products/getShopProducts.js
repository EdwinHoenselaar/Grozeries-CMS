import * as request from 'superagent'

export const SET_SHOP = 'SET_SHOP'

const setShop = products => ({
  type: SET_SHOP,
  payload: products
})

export const getShopProducts = (id) => (dispatch) => {
  request
    .get(`http://grozeries.herokuapp.com/shops/${id}`)
    .then(response => {
      dispatch(setShop(response.body))
    })
    .catch(err => console.error(err))

}