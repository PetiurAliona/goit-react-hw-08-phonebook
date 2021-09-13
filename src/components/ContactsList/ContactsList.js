import PropTypes from "prop-types"
import styled from "./ContactsList.module.css"
import { useSelector, useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/contacts-operations"

import { getExistingContacts } from "../../redux/contacts/contacts-selectors"

const ContactsList = () => {
  const arrayContacts = useSelector(getExistingContacts)
  const dispatch = useDispatch()
  return (
    <ul>
      {arrayContacts?.map(({ id, name, number }) => (
        <li className={styled.item} key={id}>
          <p className={styled.text}>{name}:</p>
          <p className={styled.text}>{number}</p>
          <button className={styled.button} onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  remove: PropTypes.func,
}

export default ContactsList
