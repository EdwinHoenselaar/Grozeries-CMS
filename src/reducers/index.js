import { combineReducers } from 'redux'
import shops from './shops'
import users from './users'
import shop from './shop'
import product from './product'

export default combineReducers({
    users,
    shops,
    shop,
    product
})