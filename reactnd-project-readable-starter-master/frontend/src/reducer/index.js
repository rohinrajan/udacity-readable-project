import * as actionTypes from '../actions/actionTypes'
import { combineReducers } from 'redux'

const Inital_state = null

export function categories(state = Inital_state, action){
  switch (action.type) {
    case actionTypes.LOAD_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

export function posts(state = Inital_state, action){
  switch (action.type) {
    case actionTypes.LOAD_POSTS:
      return action.posts;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts
});
