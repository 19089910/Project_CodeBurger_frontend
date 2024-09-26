import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Conteiner, ConteinerItems } from './styles'

export function Admin() {
  const { pathname } = useLocation() // Captura a localização atual (rota)
  return (
    <Conteiner>
      <SideMenuAdmin />
      <ConteinerItems>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.Products && <ListProducts />}
      </ConteinerItems>
    </Conteiner>
  )
}
