import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { useCart } from './../../hooks/CartContext'
import { Conteiner } from './styles'

export function CartResume() {
  const [itemsPrice, setItemsPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  // useEffect so that every time cartProducts is changed, i.e. by changing the quantity or deleting a product, useEffect modifies the variable...
  useEffect(() => {
    /**
     * 1. we need to take all the products in the cart,
     * 2. multiply their values by the quantity (WE WILL USE REDUCE)
     * 3. and add them up with the other products to give the price of the items
     */
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setItemsPrice(sumAllItems)
  }, [cartProducts])

  // Sending a request to the API and storing it in mongoDB
  const submitOrder = async () => {
    const order = cartProducts.map((produts) => {
      return { id: produts.id, quantity: produts.quantity }
    })
    await api.post('orders', { produts: order })
  }

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
      <Button
        style={{ width: '100%', marginTop: 30 }}
        onClick={{ submitOrder }}
      >
        Finalizar pedido
      </Button>
    </div>
  )
}
