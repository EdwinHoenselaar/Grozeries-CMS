import { combineReducers } from 'redux'
import shops from './shops'
import shop from './shop'
import user from './users'
import login from './login'
import currentUser from './currentUser'
import product from './product'
import orders from './orders'


export default combineReducers({
    currentUser,
    user,
    login,
    shops,
    shop,
    product,
    orders
})