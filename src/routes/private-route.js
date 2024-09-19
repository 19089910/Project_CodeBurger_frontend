import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header } from '../components/Header'
import isTokenExpired from './tokenExpired'

function PrivateRoute() {
  const user = localStorage.getItem('codeburger:userData')
  const location = useLocation()

  const isAdminPage = location.pathname === '/pedidos'
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
