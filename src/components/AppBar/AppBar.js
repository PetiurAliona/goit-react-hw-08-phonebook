import { useSelector } from "react-redux"

import AuthNav from "../AuthNav/AuthNav"

import UserMenu from "../UserMenu/UserMenu"

import { getIsLoggedIn } from "../../redux/auth/auth-selectors"

const Appbar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn())

  return <header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</header>
}

export default Appbar
