import axios from "axios"

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

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest())
  try {
    const { data } = await axios.get(`/contacts`)
    dispatch(getContactsSuccess(data))
  } catch (error) {
    dispatch(getContactsError(error))
  }
}

export const addContacts = (contact) => async (dispatch) => {
  dispatch(addContactsRequest())
  try {
    const { data } = await axios.post(`/contacts`, contact)

    dispatch(addContactsSuccess(data))
  } catch (error) {
    dispatch(addContactsError(error))
  }
}

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactsRequest())
  try {
    await axios.delete(`/contacts/${contactId}`)
    dispatch(deleteContactsSuccess(contactId))
  } catch (error) {
    dispatch(deleteContactsError(error))
  }
}
