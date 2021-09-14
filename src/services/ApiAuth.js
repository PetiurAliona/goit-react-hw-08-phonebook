import axios from "axios"

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const signUp = async (user) => {
  try {
    const { data } = await axios.post("users/signup", user)
    return data
  } catch (error) {
    throw new Error(error.response.data.error.message)
  }
}

const signIn = async (user) => {
  try {
    const { data } = await axios.post("users/login", user)
    return data
  } catch (error) {
    throw new Error(error.response.data.error.message)
  }
}

const logOut = async (authToken) => {
  axios.defaults.headers.common["Authorization"] = authToken
  try {
    return await axios.post("users/logout")
  } catch (error) {
    throw new Error(error.response.data.error.message)
  }
}

export { signUp, signIn, logOut }
