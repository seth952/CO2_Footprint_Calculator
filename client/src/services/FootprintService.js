const baseURL = 'http://localhost:3000/api/emissions/users'

export default{
  getEmissionFactors(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
