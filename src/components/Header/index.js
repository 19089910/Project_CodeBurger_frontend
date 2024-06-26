import React from 'react'

import CartIcon from '../../assets/icon-cart.svg'
import PersonIcon from '../../assets/icon-person.svg'
import {
  Conteiner,
  ConteinerLeft,
  ConteinerRight,
  PageLink,
  ConteinerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  return (
    <Conteiner>
      <ConteinerLeft>
        <PageLink style={{ color: '#9758a6' }}>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ConteinerLeft>
      <ConteinerRight>
        <PageLink>
          <img src={CartIcon} alt="icon-cart" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={PersonIcon} alt="icon-person" />
        </PageLink>
        <ConteinerText>
          <p>olá, Lucas</p>
          <PageLinkExit>sair</PageLinkExit>
        </ConteinerText>
      </ConteinerRight>
    </Conteiner>
  )
}
