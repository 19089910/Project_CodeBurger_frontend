import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
  const user = localStorage.getItem('codeburger:userData')
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
