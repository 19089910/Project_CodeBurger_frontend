import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Conteiner, Header, Body } from './styles'

export function CartIteis() {
  const { cartProducts } = useCart()
  console.log(cartProducts)

  return (
    <Conteiner>
      <Header>
        <p></p>
        <p>Iteis</p>
        <p>Preços</p>
        <p>Quantidades</p>
        <p>Total</p>
      </Header>
      {cartProducts &&
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))}
    </Conteiner>
  )
}
