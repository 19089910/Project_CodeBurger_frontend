import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header } from '../components/Header'
import paths from '../constants/paths'
import isTokenExpired from './tokenExpired'

function PrivateRoute() {
  const user = localStorage.getItem('codeburger:userData')
  const location = useLocation()

  // Checking if the current pathname is present in the paths object values
  const isAdminPage = Object.values(paths).includes(location.pathname)
  const userData = JSON.parse(user)
  const token = userData?.token

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem('codeburger:userData')
    return <Navigate to="/login" />
  }

  if (isAdminPage && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return (
    <>
      {!isAdminPage && <Header />}
      <Outlet />
    </>
  )
}

export default PrivateRoute
