import { Suspense } from "react"

import { Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import AuthNav from "./components/AuthNav/AuthNav"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import PublicRoute from "./components/PublicRoute/PublicRoute"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import RegisterPage from "./pages/RegisterPage"

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthNav />
        <Switch>
          <PrivateRoute path="/contacts" exact>
            <HomePage />
          </PrivateRoute>

          <PublicRoute path="/register" exact restricted>
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path="/login" exact restricted>
            <RegisterPage />
          </PublicRoute>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <ToastContainer autoClose={2000} />
      </Suspense>
    </>
  )
}

export default App

// <>
//   <Suspense fallback={<div>Loading...</div>}>
//     <AuthNav />
//     <Switch>
//       {isAuth && (
//         <Route path="/contacts" exact>
//           <HomePage />
//         </Route>
//       )}
//       {!isAuth && (
//         <>
//           <Route path="/register" exact>
//             <RegisterPage />
//           </Route>

//           <Route path="/login" exact>
//             <RegisterPage />
//           </Route>
//         </>
//       )}

//       <Route>
//         <NotFoundPage />
//       </Route>
//     </Switch>
//   </Suspense>
// </>
