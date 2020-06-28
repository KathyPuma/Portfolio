import { combineReducers } from 'redux'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
  state: themeReducer,
})

export default rootReducer;