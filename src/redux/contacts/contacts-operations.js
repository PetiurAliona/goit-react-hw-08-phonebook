import axios from "axios"
import { authTokenSelector } from "../auth/auth-selectors"
import { getContactsFromState } from "../contacts/contacts-selectors"

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

export const addContacts = (contact, name) => async (dispatch, getState) => {
  const items = getContactsFromState(getState())
  if (items.length === 0) {
    dispatch(addContactsRequest())
    try {
      const { data } = await axios.post(`/contacts`, contact, {
        headers: { Authorization: `Bearer ${authTokenSelector(getState())}` },
      })
      dispatch(addContactsSuccess(data))
    } catch (error) {
      dispatch(addContactsError(error))
    }
  } else {
    if (items.some((item) => item.name === name)) {
      alert(`${name} is already in contacts`)
    } else {
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
