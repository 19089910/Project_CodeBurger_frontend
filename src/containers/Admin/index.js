import React from 'react'

import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
// import Orders from './Orders'
import { Conteiner, ConteinerItems } from './styles'

export function Admin() {
  return (
    <Conteiner>
      <SideMenuAdmin />
      <ConteinerItems>
        <ListProducts />
        {/* <Orders /> */}
      </ConteinerItems>
    </Conteiner>
  )
}
