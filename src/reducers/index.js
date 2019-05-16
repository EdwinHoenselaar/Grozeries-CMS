import { combineReducers } from 'redux'
import shops from './shops'
import users from './users'

export default combineReducers({
    users,
    shops
})