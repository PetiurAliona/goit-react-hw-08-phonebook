import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { getContactsRequest, getContactsSuccess, getContactsError, addContactsRequest,  addContactsSuccess,  addContactsError,  deleteContactsRequest, deleteContactsSuccess, deleteContactsError, changeFilter } from './contacts-actions'

const findName = function (contacts, payload) {
  const isContact = contacts.some((item) => item.name === payload.name)
  isContact && alert(`${payload.name} is already in contacts`)
  return !isContact ? [...contacts, payload] : contacts
}

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => findName(state, payload),
  [deleteContactsSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
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
  error
})
