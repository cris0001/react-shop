import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../context/user_context'

const Private = ({ children, ...rest }) => {
  const { usr } = useUserContext()

  return (
    <Route
      {...rest}
      render={() => {
        return usr ? children : <Redirect to='/'></Redirect>
      }}
    ></Route>
  )
}

export default Private
