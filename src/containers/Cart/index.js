import React from 'react'

import CartBanner from '../../assets/banner-cart.svg'
import { CartIteis, CartResume } from '../../components'
import { Conteiner, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Conteiner>
      <CartImg src={CartBanner} alt="banner de carrinho" />
      <Wrapper>
        <CartIteis />
        <CartResume />
      </Wrapper>
    </Conteiner>
  )
}
