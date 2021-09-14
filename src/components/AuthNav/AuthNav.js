import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { signOut } from "../../redux/auth/auth-actions"
import { authIsLoginSelector, authTokenSelector, authUserNameSelector } from "../../redux/auth/auth-selectors"

import { toast } from "react-toastify"
import { useEffect } from "react"
import styled from "./AuthNav.module.css"

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
    <ul className={styled.authWrapper}>
      {!isAuth && (
        <>
          <li>
            <NavLink to="/register" className={styled.authLink} activeClassName={styled.active} exact>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styled.authLink} activeClassName={styled.active} exact>
              LogIn
            </NavLink>
          </li>
        </>
      )}

      {isAuth && (
        <>
          <li>
            <NavLink to="/contacts" className={styled.authLink} activeClassName={styled.active} exact>
              Contacts
            </NavLink>
          </li>
          <li>
            <button type="button" className={styled.btnExit} onClick={exit}>
              LogOut
            </button>
          </li>
        </>
      )}
    </ul>
  )
}

export default AuthNav
