import React from 'react'

import { SideMenuAdmin } from '../../components'
import Orders from './Orders'
import { Conteiner } from './styles'

export function Admin() {
  return (
    <Conteiner>
      <SideMenuAdmin />
      <Orders />
    </Conteiner>
  )
}
