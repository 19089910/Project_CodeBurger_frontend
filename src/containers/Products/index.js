import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import BannerProduct from '../../assets/banner-product.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Conteiner,
  ProductImage,
  CategoryMenu,
  CategoryButton,
  ProductConteiner
} from './styles'

export function Products() {
  const { state } = useLocation()
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)
  const [filteredProducts, setFilteredProducts] = useState([])

  // DATA LOADS
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      const newCategries = [{ id: 0, name: 'Todos' }, ...data.categories]
      setCategories(newCategries)
    }

    async function loadProduct() {
      const { data } = await api.get('/products')

      const newProducts = data.products.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }

    loadCategories()
    loadProduct()
  }, [])

  // PRODUCT FILTER MENU
  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

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
      <ProductConteiner>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductConteiner>
    </Conteiner>
  )
}
