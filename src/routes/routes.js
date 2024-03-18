import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cagastro" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
