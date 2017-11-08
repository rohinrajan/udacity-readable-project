import { LOAD_CATEGORIES } from '../actions'
import { combineReducers } from 'redux'

const Inital_state = []
export function category(state = Inital_state, action){
  switch (action.type) {
    case LOAD_CATEGORIES:
      return [action.data];
    default:
      return state;
  }
}

export default combineReducers({
  category
});
