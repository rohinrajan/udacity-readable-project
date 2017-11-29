import * as api from '../utils'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export const load_categories = () => dispatch =>{
   return api.getCategories().then(categories => dispatch(getAllCategories(categories)))}


const getAllCategories = (categories) => {
  return {
    type: LOAD_CATEGORIES,
    payload: categories
  }
}
