import React from 'react'

import Orders from './Orders'
import { Conteiner } from './styles'

export function Admin() {
  return (
    <Conteiner>
      <h2>Admin</h2>
      <Orders />
    </Conteiner>
  )
}
