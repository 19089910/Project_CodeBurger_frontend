import React from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  return (
    <Conteiner>
      <ConteinerLeft>
        <PageLink onClick={() => navigate('/')} style={{ color: '#9758a6' }}>
          Home
        </PageLink>
        <PageLink onClick={() => navigate('/produtos')}>Ver Produtos</PageLink>
      </ConteinerLeft>

      <ConteinerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
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
