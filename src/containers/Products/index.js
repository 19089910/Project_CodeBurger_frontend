import React, { useEffect, useState } from 'react'

import BannerProduct from '../../assets/banner-product.svg'
import CardProduct from '../../components/CardProduct'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Conteiner,
  ProductImage,
  CategoryMenu,
  CategoryButton,
  ProductConteiner
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

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
        {products &&
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductConteiner>
    </Conteiner>
  )
}

export default Products
