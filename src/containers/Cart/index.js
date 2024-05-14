import React from 'react'

import CartBanner from '../../assets/banner-cart.svg'
import { CartIteis } from '../../components'
import { Conteiner, CartImg } from './styles'

export function Cart() {
  return (
    <Conteiner>
      <CartImg src={CartBanner} alt="banner de carrinho" />
      <CartIteis />
    </Conteiner>
  )
}
