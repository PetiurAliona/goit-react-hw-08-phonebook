import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { signOut } from "../../redux/auth/auth-actions"
import { authTokenSelector } from "../../redux/auth/auth-selectors"

const AuthNav = () => {
  const isAuth = useSelector(authTokenSelector)
  const dispatch = useDispatch()
  const exit = () => dispatch(signOut())
  return (
    <ul>
      {!isAuth && (
        <>
          <li>
            <NavLink to="/register" exact>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact>
              LogIn
            </NavLink>
          </li>
        </>
      )}
      {isAuth && (
        <>
          <li>
            <NavLink to="/contacts" exact>
              Contacts
            </NavLink>
          </li>
          <li>
            <button type="button" onClick={exit}>
              LogOut
            </button>
          </li>
        </>
      )}
    </ul>
  )
}

export default AuthNav
