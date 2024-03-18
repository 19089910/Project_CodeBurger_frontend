import axios from 'axios'

export const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

// Adding an interceptor to add the JWT token to each API call
apiCodeBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurger
