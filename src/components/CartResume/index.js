import React from 'react'

import { Button } from '../Button'
import { Conteiner } from './styles'

export function CartResume() {
  return (
    <div>
      <Conteiner>
        <div className="container-top">
          <h2 className="title">resumo do pedido</h2>
          <p className="items">Items</p>
          <p className="items-price">R$ 10,00</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">R$ 10,00</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>R$ 20,00</p>
        </div>
      </Conteiner>
      <Button style={{ width: '100%', marginTop: 30 }}>Finalizar pedido</Button>
    </div>
  )
}
