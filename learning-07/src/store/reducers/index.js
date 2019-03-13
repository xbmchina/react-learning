import { combineReducers } from 'redux'
import { user } from './module/user'
import { comments } from './module/comments'
const rootReducer = combineReducers({
  /* your reducers */
  user,
  comments,
})
export default rootReducer
