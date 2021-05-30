import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0()
  const [usr, setUsr] = useState(null)

  useEffect(() => {
    if (isAuthenticated) {
      setUsr(user)
    } else {
      setUsr(false)
    }
  }, [isAuthenticated])

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, usr }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
