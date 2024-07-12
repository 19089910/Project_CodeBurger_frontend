import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

function PrivateRoute() {
  const user = localStorage.getItem('codeburger:userData')
  return user ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoute
