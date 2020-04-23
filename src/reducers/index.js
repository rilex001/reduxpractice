import counterReducer from './counter'
import loggedReducer from './isLogged'
import policies from './policies'
import claimsHistory from './claimsHistory'
import accounting from './accounting'


import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    policies: policies,
    claimsHistory: claimsHistory,
    accounting: accounting
})

export default allReducers