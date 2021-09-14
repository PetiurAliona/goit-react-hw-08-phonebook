import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { signOut } from "../../redux/auth/auth-actions"
import { authIsLoginSelector, authTokenSelector, authUserNameSelector } from "../../redux/auth/auth-selectors"

import { toast } from "react-toastify"
import { useEffect } from "react"

const AuthNav = () => {
  const isAuth = useSelector(authTokenSelector)
  const userName = useSelector(authUserNameSelector)
  const isLogin = useSelector(authIsLoginSelector)

  const dispatch = useDispatch()
  const exit = () => dispatch(signOut())

  useEffect(() => {
    isLogin && toast.success(`Wellcome, ${userName} !`)
    // eslint-disable-next-line
  }, [isLogin])

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
