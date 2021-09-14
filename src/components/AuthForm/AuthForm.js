import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router"
import { signInOperation, signUpOperation } from "../../redux/auth/auth-operations"

const initialState = {
  email: "",
  password: "",
  name: "",
}

const AuthForm = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const [user, setUser] = useState(initialState)
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault()
    try {
      isSignUp()
        ? await dispatch(signUpOperation(user))
        : await dispatch(signInOperation({ email: user.email, password: user.password }))
    } catch (error) {}
  }

  const isSignUp = () => location.pathname === "/register"

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Email
        <input
          onChange={handleChangeInput}
          value={user.email}
          type="email"
          name="email"
          placeholder="test@gmail.com"
          required
        />
      </label>
      <label>
        Password
        <input
          onChange={handleChangeInput}
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your password"
          required
        />
      </label>
      {isSignUp() && (
        <label>
          Name
          <input
            onChange={handleChangeInput}
            value={user.name}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
      )}

      <button type="submit">SignIn</button>
    </form>
  )
}

export default AuthForm
