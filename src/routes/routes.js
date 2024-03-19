import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from './private-route'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
