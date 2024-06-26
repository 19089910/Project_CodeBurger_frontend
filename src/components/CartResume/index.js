import React, { useEffect, useState } from 'react'

import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { useCart } from './../../hooks/CartContext'
import { Conteiner } from './styles'

export function CartResume() {
  const [itemsPrice, setItemsPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setItemsPrice(sumAllItems)
  }, [cartProducts])

  return (
    <div>
      <Conteiner>
        <div className="container-top">
          <h2 className="title">resumo do pedido</h2>
          <p className="items">Items</p>
          <p className="items-price">{formatCurrency(itemsPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(itemsPrice + deliveryTax)}</p>
        </div>
      </Conteiner>
      <Button style={{ width: '100%', marginTop: 30 }}>Finalizar pedido</Button>
    </div>
  )
}
