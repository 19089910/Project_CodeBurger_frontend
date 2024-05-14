import React from 'react'

import { useCart } from '../../hooks/CartContext'
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
      <Body></Body>
    </Conteiner>
  )
}
