import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})
// context structure:
// teg html structure for data transit
export const UserProvider = ({ children }) => {
  // state variable to serve as temporary storage
  // so the provider context can fetch or store data
  const [userData, setUserData] = useState({})

  // write or record on the local storage
  const putUserData = async (userInfo) => {
    setUserData(userInfo)
    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }

  // capture or get user information in local storage
  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData')
      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }
    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ userData, putUserData }}>
      {children}
    </UserContext.Provider>
  )
}
// context provide:
// the data to be available to the screens their container uses the useUser function... function and the result of the user context:
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
