import { combineReducers } from 'redux'
import shops from './shops'
import shop from './shop'
import users from './users'
import login from './login'
import currentUser from './currentUser'
import product from './product'


export default combineReducers({
    currentUser,
    users,
    login,
    shops,
    shop,
    product
})