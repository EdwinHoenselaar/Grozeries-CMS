import { SET_PRODUCT } from '../actions/products/getProduct'


export default (state = null, {type, payload}) => {
  switch (type) {

    case SET_PRODUCT:
      return payload
      
    default:
      return state
  }
}