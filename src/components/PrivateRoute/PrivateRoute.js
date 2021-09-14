import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import { authTokenSelector } from "../../redux/auth/auth-selectors"

const PrivateRoute = ({ children, ...routeProps }) => {
  const isAuth = useSelector(authTokenSelector)
  return <Route {...routeProps}>{isAuth ? children : <Redirect to="/login" />}</Route>
}

export default PrivateRoute
