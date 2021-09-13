import { createSelector } from "@reduxjs/toolkit"

export const getContactsFromState = (state) => state.contacts.items
export const getFilterFromState = (state) => state.contacts.filter
export const getLoadingFromState = (state) => state.contacts.isLoading

const existingContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase()
  return items?.filter((contact) => contact.name?.toLowerCase().includes(normalizedFilter))
}

export const getExistingContacts = createSelector([getContactsFromState, getFilterFromState], (items, filter) =>
  existingContacts(items, filter)
)
