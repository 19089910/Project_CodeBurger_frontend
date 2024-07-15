import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header } from '../components/Header'

function PrivateRoute() {
  const user = localStorage.getItem('codeburger:userData')
  const location = useLocation()

  const isAdminPage = location.pathname === '/pedidos'

  if (!user) {
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
