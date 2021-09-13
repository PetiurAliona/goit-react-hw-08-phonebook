import { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Appbar from "./components/AppBar/AppBar"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Appbar />
        <Switch>
          <Route path="/contacts" exact>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}

export default App
