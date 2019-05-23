import { SET_ORDERLINES } from '../actions/orders/getShopOrders'

export default (state = null, {type, payload}) => {
  switch (type) {

    case SET_ORDERLINES:
      return payload
      
    default:
      return state
  }
}