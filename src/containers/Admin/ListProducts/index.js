import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Conteiner } from './styles'

function ListProducts() {
  const [products, setProducts] = useState([])

  // get(products):
  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data.products)
    }
    loadProducts()
  }, [])

  return <Conteiner>admin</Conteiner>
}

export default ListProducts
