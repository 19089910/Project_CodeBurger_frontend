import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext({})
// context structure:
// teg html structure for data transit
export const UserProvider = ({ children }) => {
  // state variable to serve as temporary storage
  // so the provider context can fetch or store data
  const [userData, setUserData] = useState({})
  const putUserData = (userInfo) => {
    setUserData(userInfo)
  }
  return (
    <UserContext.Provider value={{ userData, putUserData }}>
      {children}
    </UserContext.Provider>
  )
}
// context provide:
// the data for the screen containers by invoking the useUser function:
export const useUser = () => {
  const context = useContext(UserContext)
  // here only if, by some mistake, we invoke useUser and it is empty, it tells the console that the problem is here.
  if (!context) {
    throw new Error('useUser most be used with UserContext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}