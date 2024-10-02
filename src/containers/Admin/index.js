import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
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
        {pathname === paths.NewProduct && <NewProduct />}
        {pathname === paths.EditProduct && <EditProduct />}
      </ConteinerItems>
    </Conteiner>
  )
}
