import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '../Button'
import { Conteiner, Image, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  return (
    <Conteiner>
      <Image src={product.url} alt="imagem-do_produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Conteiner>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
