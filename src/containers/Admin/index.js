import React from 'react'

import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
// import Orders from './Orders'
import { Conteiner } from './styles'

export function Admin() {
  return (
    <Conteiner>
      <SideMenuAdmin />
      <ListProducts />
      {/* <Orders /> */}
    </Conteiner>
  )
}
