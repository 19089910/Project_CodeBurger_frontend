import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

const UserContext = createContext({})
// context structure:
// teg html structure for data transit
export const UserProvider = ({ children }) => {
  // this example is the data I want to save and make available
  const user = { name: 'lucas', age: 23 }
  const outroUser = { name: 'levi', age: 20 }

  return (
    <UserContext.Provider value={[user, outroUser]}>
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
