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
