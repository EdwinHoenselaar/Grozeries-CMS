import * as request from 'superagent'

export const SET_SHOPS = 'SET_SHOPS'

const setShops = shops => ({
  type: SET_SHOPS,
  payload: shops
})

export const getShops = () => (dispatch) => {
  request
    .get('http://grozeries.herokuapp.com/shops')
    .then(response => {
      dispatch(setShops(response.body))
    })
    .catch(err => console.error(err))

}