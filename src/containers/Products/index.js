import React, { useEffect, useState } from 'react'

import BannerProduct from '../../assets/banner-product.svg'
import api from '../../services/api'
import { Conteiner, ProductImage, CategoryMenu, CategoryButton } from './styles'

function Products() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      const newCategries = [{ id: 0, name: 'Todos' }, ...data.categories]
      setCategories(newCategries)
    }

    loadCategories()
  }, [])

  return (
    <Conteiner>
      <ProductImage src={BannerProduct} alt="product-image" />
      <CategoryMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton type="button" key={category.id}>
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
    </Conteiner>
  )
}

export default Products
