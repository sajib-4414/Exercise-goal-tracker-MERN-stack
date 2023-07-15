import axios from 'axios'
const base_url = process.env.REACT_APP_API_URI
const API_URL = base_url + '/api/users/'



const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    console.log("printing login url")
    console.log(API_URL)
  
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