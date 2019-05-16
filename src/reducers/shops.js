import { SET_SHOPS } from '../actions/shops/getShops'


export default (state = null, {type, payload}) => {
  switch (type) {

    case SET_SHOPS:
      return payload
      
    default:
      return state
  }
}