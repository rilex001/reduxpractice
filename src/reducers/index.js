import counterReducer from './counter'
import loggedReducer from './isLogged'
import rootReducer from './rootReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    root: rootReducer
})

export default allReducers