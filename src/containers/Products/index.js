import React, { useEffect, useState } from 'react'

import BannerProduct from '../../assets/banner-product.svg'
import api from '../../services/api'
import { Conteiner, ProductImage, CategoryMenu, CategoryButton } from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [Products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      const newCategries = [{ id: 0, name: 'Todos' }, ...data.categories]
      setCategories(newCategries)
    }

    async function loadProduct() {
      const { data } = await api.get('products')
      setProducts(data)
    }

    loadCategories()
    loadProduct()
  }, [])

  return (
    <Conteiner>
      <ProductImage src={BannerProduct} alt="product-image" />
      <CategoryMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
    </Conteiner>
  )
}

export default Products
