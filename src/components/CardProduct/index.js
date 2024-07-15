import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Conteiner, Image, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  const navigate = useNavigate()

  return (
    <Conteiner>
      <Image src={product.url} alt="imagem-do_produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            navigate('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </div>
    </Conteiner>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
