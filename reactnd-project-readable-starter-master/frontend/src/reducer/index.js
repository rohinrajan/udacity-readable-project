import { LOAD_CATEGORIES } from '../actions'
import { combineReducers } from 'redux'

const Inital_state = null
export function category(state = Inital_state, action){
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  category
});
