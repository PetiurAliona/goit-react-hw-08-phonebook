import { signIn, signUp, logOut } from "../../services/ApiAuth"

import {
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
  signOut,
} from "./auth-actions"

export const signUpOperation = (user) => async (dispatch) => {
  dispatch(signUpRequest())
  try {
    const response = await signUp(user)

    dispatch(signUpSuccess(response))
  } catch (error) {
    dispatch(signUpError(error.message))
  }
}

export const signInOperation = (user) => async (dispatch) => {
  dispatch(signInRequest())
  try {
    const response = await signIn(user)
    dispatch(signInSuccess(response))
  } catch (error) {
    dispatch(signInError(error.message))
  }
}

export const LogOutOperation = (token) => async (dispatch) => {
  try {
    await logOut(token)
    dispatch(signOut())
  } catch (error) {
    dispatch(signInError(error.message))
  }
}

// import axios from "axios"
// import { createAsyncThunk } from "@reduxjs/toolkit"

// axios.defaults.baseURL = "https://connections-api.herokuapp.com"

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ""
//   },
// }

// const register = createAsyncThunk("auth/register", async (credentials) => {
//   try {
//     const { data } = await axios.post("/users/signup", credentials)
//     token.set(data.token)
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// })

// const logIn = createAsyncThunk("auth/login", async (credentials) => {
//   try {
//     const { data } = await axios.post("/users/login", credentials)
//     token.set(data.token)
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// })

// const logOut = createAsyncThunk("auth/logout", async () => {
//   try {
//     await axios.post("/users/logout")
//     token.unset()
//   } catch (error) {
//     console.log(error)
//   }
// })

// const fetchCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
//   const state = thunkAPI.getState()
//   const persistedToken = state.auth.token

//   if (persistedToken === null) {
//     return thunkAPI.rejectWithValue()
//   }

//   token.set(persistedToken)
//   try {
//     const { data } = await axios.get("/users/current")
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// })

// const authOperations = {
//   register,
//   logOut,
//   logIn,
//   fetchCurrentUser,
// }
// export default authOperations
