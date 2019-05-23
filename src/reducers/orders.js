import { SET_ORDERLINES } from '../actions/orders/getShopOrders'
import { SET_ORDERLINE } from '../actions/orders/updateOrderline'

export default (state = null, {type, payload}) => {

  switch (type) {

    case SET_ORDERLINES:
      return payload
    
    // case SET_ORDERLINE:
    //   return payload

    default:
      return state
  }
}