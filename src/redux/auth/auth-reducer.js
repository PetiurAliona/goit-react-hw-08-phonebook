import { createReducer, combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import {
  resetError,
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
  signOut,
} from "./auth-actions"

export const userReducer = createReducer(
  {
    email: "",
    name: "",
    token: "",
  },
  {
    [signUpSuccess]: (_, { payload }) => ({
      email: payload.user.email,
      name: payload.user.name,
      token: payload.token,
    }),
    [signInSuccess]: (_, { payload }) => ({
      email: payload.user.email,
      name: payload.user.name,
      token: payload.token,
    }),
    [signOut]: () => ({
      email: "",
      name: "",
      token: "",
    }),
  }
)

export const errorReducer = createReducer("", {
  [signUpError]: (_, { payload }) => payload,
  [signInError]: (_, { payload }) => payload,
  [resetError]: () => "",
})

export const loaderReducer = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
})

export const isLoginReducer = createReducer(false, {
  [signUpSuccess]: () => true,
  [signInSuccess]: () => true,
})

const persistConfigAuth = {
  key: "auth",
  storage,
  whitelist: ["token"],
}

export const authReducer = combineReducers({
  user: persistReducer(persistConfigAuth, userReducer),
  error: errorReducer,
  isLoading: loaderReducer,
  isLogIn: isLoginReducer,
})
