import axios from "axios"
import { authTokenSelector } from "../auth/auth-selectors"

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
} from "./contacts-actions"

// axios.defaults.baseURL = "http://localhost:4040"

// axios.defaults.baseURL = "https://connections-api.herokuapp.com"

export const getContacts = () => async (dispatch, getState) => {
  dispatch(getContactsRequest())
  try {
    const { data } = await axios.get(`/contacts`, {
      headers: { Authorization: `Bearer ${authTokenSelector(getState())}` },
    })
    dispatch(getContactsSuccess(data))
  } catch (error) {
    dispatch(getContactsError(error))
  }
}

export const addContacts = (contact) => async (dispatch, getState) => {
  dispatch(addContactsRequest())
  try {
    const { data } = await axios.post(`/contacts`, contact, {
      headers: { Authorization: `Bearer ${authTokenSelector(getState())}` },
    })

    dispatch(addContactsSuccess(data))
  } catch (error) {
    dispatch(addContactsError(error))
  }
}

export const deleteContact = (contactId) => async (dispatch, getState) => {
  dispatch(deleteContactsRequest())
  try {
    await axios.delete(`/contacts/${contactId}`, {
      headers: { Authorization: `Bearer ${authTokenSelector(getState())}` },
    })
    dispatch(deleteContactsSuccess(contactId))
  } catch (error) {
    dispatch(deleteContactsError(error))
  }
}
