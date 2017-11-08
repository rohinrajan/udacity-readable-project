import * as api from '../utils'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function load_categories(){
    return dispatch => { api.getCategories().then((category) => dispatch(
      {type: LOAD_CATEGORIES,
        data: category}))
    }
}
