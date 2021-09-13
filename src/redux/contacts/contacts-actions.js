import { createAction } from "@reduxjs/toolkit"

export const addContactsRequest = createAction("contacts/addRequest")
export const addContactsSuccess = createAction("contacts/addSuccess")
export const addContactsError = createAction("contacts/addError")

export const getContactsRequest = createAction('contacts/getRequest');
export const getContactsSuccess = createAction('contacts/getSuccess');
export const getContactsError = createAction('contacts/getError');


export const deleteContactsRequest = createAction('contacts/deleteRequest');
export const deleteContactsSuccess = createAction('contacts/deleteSuccess');
export const deleteContactsError = createAction('contacts/deleteError');

export const changeFilter = createAction("contacts/changeFilter")

