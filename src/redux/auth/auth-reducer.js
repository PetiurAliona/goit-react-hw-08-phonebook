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
    [signUpSuccess]: (state, { payload }) => ({
      email: payload.user.email,
      name: payload.user.name,
      token: payload.token,
    }),
    [signInSuccess]: (state, { payload }) => ({
      email: payload.user.email,
      name: payload.user.name,
      token: payload.token,
    }),
    [signOut]: (state) => ({
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

const persistConfigAuth = {
  key: "auth",
  storage,
  whitelist: ["token"],
}

export const authReducer = combineReducers({
  user: persistReducer(persistConfigAuth, userReducer),
  error: errorReducer,
  isLoading: loaderReducer,
})
