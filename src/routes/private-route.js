import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header } from '../components/Header'

function PrivateRoute() {
  const user = localStorage.getItem('codeburger:userData')
  const location = useLocation()

  const isAdminPage = location.pathname === '/pedidos'
  return user ? (
    <>
      {!isAdminPage && <Header />}
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoute
