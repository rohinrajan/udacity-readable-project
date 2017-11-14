import * as api from '../utils'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function load_categories(){
    return api.getCategories().then((results) =>
      { type: LOAD_CATEGORIES,
        data: results.data
      })
}
