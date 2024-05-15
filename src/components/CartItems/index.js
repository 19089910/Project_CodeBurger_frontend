import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Conteiner, Header, Body, EmptyCart } from './styles'

export function CartIteis() {
  const { cartProducts } = useCart()
  console.log(cartProducts)

  return (
    <Conteiner>
      <Header>
        <p></p>
        <p>Iteis</p>
        <p>Preços</p>
        <p style={{ paddingRight: 30 }}>Quantidades</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.lenght > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
    </Conteiner>
  )
}
