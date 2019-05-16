import { SET_SHOP } from '../actions/products/getShopProducts'


export default (state = null, {type, payload}) => {
  switch (type) {

    case SET_SHOP:
      return payload
      
    default:
      return state
  }
}