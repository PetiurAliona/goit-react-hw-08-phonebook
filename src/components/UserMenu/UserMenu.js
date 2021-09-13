import { useDispatch, useSelector } from "react-redux"
import authOperations from "../../redux/auth/auth-operations"
import { getUsername } from "../../redux/auth/auth-selectors"

const UserMenu = () => {
  const dispatch = useDispatch()
  const name = useSelector(getUsername())

  return (
    <div>
      <img src="" alt="" width="" />
      <span>Wellcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </button>
    </div>
  )
}

export default UserMenu
