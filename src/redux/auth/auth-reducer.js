import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

import authOperations from "./auth-operations"

const userData = createReducer(
  {},
  {
    [authOperations.register.fulfilled]: (_, { payload }) => payload.user,
    [authOperations.logIn.fulfilled]: (_, { payload }) => payload.user,
    [authOperations.fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
    [authOperations.register.rejected]: () => ({}),
    [authOperations.logIn.rejected]: () => ({}),
    [authOperations.fetchCurrentUser.rejected]: () => ({}),
    [authOperations.logOut.fulfilled]: () => ({}),
  }
)

const token = createReducer("", {
  [authOperations.register.fulfilled]: (_, { payload }) => payload.token,
  [authOperations.logIn.fulfilled]: (_, { payload }) => payload.token,
  [authOperations.register.rejected]: () => "",
  [authOperations.logIn.rejected]: () => "",
  [authOperations.logOut.fulfilled]: () => "",
  [authOperations.fetchCurrentUser.rejected]: () => "",
})

const isLogIn = createReducer(false, {
  [authOperations.register.fulfilled]: () => true,
  [authOperations.logIn.fulfilled]: () => true,
  [authOperations.fetchCurrentUser.fulfilled]: () => true,
  [authOperations.register.pending]: () => false,
  [authOperations.logIn.pending]: () => false,
  [authOperations.fetchCurrentUser.pending]: () => false,
  [authOperations.register.rejected]: () => false,
  [authOperations.logIn.rejected]: () => false,
  [authOperations.fetchCurrentUser.rejected]: () => false,
  [authOperations.logOut.fulfilled]: () => false,
})

const isFetchingUser = createReducer(false, {
  [authOperations.fetchCurrentUser.pending]: () => true,
  [authOperations.fetchCurrentUser.rejected]: () => false,
  [authOperations.fetchCurrentUser.fulfilled]: () => false,
})

export default combineReducers({
  userData,
  token,
  isLogIn,
  isFetchingUser,
})
