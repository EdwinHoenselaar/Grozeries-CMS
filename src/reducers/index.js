import { combineReducers } from 'redux'
import shops from './shops'
import users from './users'
import shop from './shop'

export default combineReducers({
    users,
    shops,
    shop
})