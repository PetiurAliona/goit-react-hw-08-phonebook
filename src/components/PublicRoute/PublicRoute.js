import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import { authTokenSelector } from "../../redux/auth/auth-selectors"

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isAuth = useSelector(authTokenSelector)
  const shouldRedirect = isAuth && restricted
  return <Route {...routeProps}>{shouldRedirect ? <Redirect to="/contacts" /> : children}</Route>
}

export default PublicRoute
