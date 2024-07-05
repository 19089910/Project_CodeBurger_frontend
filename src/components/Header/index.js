import React, { useHistory } from 'react'

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
  const history = useHistory()

  return (
    <Conteiner>
      <ConteinerLeft>
        <PageLink
          onClick={() => history.push('/')}
          style={{ color: '#9758a6' }}
        >
          Home
        </PageLink>
        <PageLink onClick={() => history.push('/produtos')}>
          Ver Produtos
        </PageLink>
      </ConteinerLeft>

      <ConteinerRight>
        <PageLink onClick={() => history.push('/carrinho')}>
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
