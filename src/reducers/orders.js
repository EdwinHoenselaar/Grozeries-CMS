import { SET_ORDERS } from '../actions/orders/getShopOrders'

export default (state = null, {type, payload}) => {
  switch (type) {

    case SET_ORDERS:
      return payload
      
    default:
      return state
  }
}