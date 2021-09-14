import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { signOut } from "../auth/auth-actions"
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
} from "./contacts-actions"

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [signOut]: () => [],
})

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
  [signOut]: () => "",
})

const isLoading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
})

const error = createReducer(null, {
  [getContactsError]: (_, { payload }) => payload,
  [getContactsRequest]: () => null,
  [addContactsError]: (_, { payload }) => payload,
  [deleteContactsError]: (_, { payload }) => payload,
})

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
})
