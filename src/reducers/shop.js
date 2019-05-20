import { SET_SHOP } from '../actions/products/getShopProducts'
import { ADD_PRODUCT } from '../actions/products/createProduct'


export default (state = null, {type, payload}) => {
  switch (type) {

    case SET_SHOP:
      return payload
    
    case ADD_PRODUCT:
      return state.products.push(payload)
      
    default:
      return state
  }
}