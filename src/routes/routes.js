import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Register, Products, Cart } from '../containers'
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
        </Route>
      </Routes>
    </Router>
  )
}

export default App
