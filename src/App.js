import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import ContactForm from "./components/ContactForm/ContactForm"
import Filter from "./components/Filter/Filter"
import ContactsList from "./components/ContactsList/ContactsList"

import { getContacts } from "./redux/contacts/contacts-operations"
import { getContactsFromState, getLoadingFromState } from "./redux/contacts/contacts-selectors"
import LoaderSpinner from "./components/Loader/Loader"

const App = () => {
  const dispatch = useDispatch()

  const contacts = useSelector(getContactsFromState)
  const loading = useSelector(getLoadingFromState)

  useEffect(() => dispatch(getContacts()), [dispatch])

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* <ContactsList /> */}
      {contacts?.length ? <ContactsList /> : !loading && <h3>Your phonebook is empty</h3>}
      {loading && <LoaderSpinner />}
    </>
  )
}

export default App
