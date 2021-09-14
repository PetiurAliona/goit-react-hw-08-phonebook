import { Suspense, useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Switch, useHistory } from "react-router-dom"

import AuthNav from "./components/AuthNav/AuthNav"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import RegisterPage from "./pages/RegisterPage"
import { authTokenSelector } from "./redux/auth/auth-selectors"

const App = () => {
  const isAuth = useSelector(authTokenSelector)
  const history = useHistory()

  useEffect(() => {
    isAuth ? history.push("/contacts") : history.push("/login")
  })

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthNav />
        <Switch>
          {isAuth && (
            <Route path="/contacts" exact>
              <HomePage />
            </Route>
          )}
          {!isAuth && (
            <>
              <Route path="/register" exact>
                <RegisterPage />
              </Route>
              <Route path="/login" exact>
                <RegisterPage />
              </Route>
            </>
          )}

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}

export default App
