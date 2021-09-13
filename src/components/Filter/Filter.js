import PropTypes from "prop-types"
import styled from "./Filter.module.css"
import { connect } from "react-redux"
import {changeFilter} from "../../redux/contacts/contacts-actions"

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input value={value} onChange={onChange} name="filter" type="text" className={styled.input}></input>
  </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
