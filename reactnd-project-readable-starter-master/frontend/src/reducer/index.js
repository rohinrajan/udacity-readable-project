import { LOAD_CATEGORIES } from '../actions'
import { combineReducers } from 'redux'

export function category(state = [], action){
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.category;
    default:
      return state;
  }
}

export default combineReducers({
  category
});
