import axios from "axios";

const base_url = process.env.REACT_APP_API_URI
const API_URL = base_url + '/api/goals/'

//create a new goal
const createGoal = async(goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goalData, config)
    return response.data
}

//get  goals
const getGoals = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

//delete  goals
const deleteGoal = async(goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL+goalId, config)
    return response.data
}

const goalService = {
    createGoal, getGoals, deleteGoal
}

export default goalService