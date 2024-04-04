import React, { useEffect, useState } from 'react'

import BannerProduct from '../../assets/banner-product.svg'
import api from '../../services/api'
import { Conteiner, ProductImage } from './styles'
function Products() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Conteiner>
      <ProductImage src={BannerProduct} alt="product-image" />
      {Array.isArray(categories.categories) &&
        categories.categories.map((category) => (
          <button key={category.id}>{category.name}</button>
        ))}
    </Conteiner>
  )
}

export default Products
