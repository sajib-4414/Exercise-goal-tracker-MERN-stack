import axios from 'axios'
// this works in prod, not dev, for dev proxy is not working
const API_URL = '/api/users/'



const register = async (userData) => {
    console.log("printing register url")
    console.log(API_URL)
    // console.log("printing base url;")
    // console.log(base_url)
    console.log("printing just api")
    console.log(process.env.API_URI)
    const response = await axios.post(API_URL, userData)
    
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }
  
  // Login user
  const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }
  
  // Logout user
  const logout = () => {
    localStorage.removeItem('user')
  }
  
  const authService = {
    register,
    logout,
    login,
  }
  
  export default authService