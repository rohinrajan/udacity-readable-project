const api = "http://localhost:3001"

let token = localStorage.token = Math.random().toString(36).substr(-8)
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

export const getCategories = () => {
  return fetch(`${api}/categories`, { headers: headers })
    .then(res => res.json())
    .then(data => data.categories)
  }
