import PropTypes from 'prop-types'
import React from 'react'

import Button from '../Button'
import { Conteiner, Image, ProductName, ProductPrice } from './styles'

function CardProduct({ product }) {
  return (
    <Conteiner>
      <Image src={product.url} alt="imagem-do_produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Conteiner>
  )
}

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}
