import React from 'react'

import BannerProduct from '../../assets/banner-product.svg'
import { Conteiner, ProductImage } from './styles'

function Products() {
  return (
    <Conteiner>
      <ProductImage src={BannerProduct} alt="product-image" />
    </Conteiner>
  )
}

export default Products
