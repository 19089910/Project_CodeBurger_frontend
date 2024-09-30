import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Register, Products, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" index element={<Home />} />
          <Route path="/produtos" index element={<Products />} />
          <Route path="/carrinho" index element={<Cart />} />

          <Route path={paths.Order} index element={<Admin />} />
          <Route path={paths.Products} index element={<Admin />} />
          <Route path={paths.NewProduct} index element={<Admin />} />
          <Route path={paths.EditProducts} index element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
