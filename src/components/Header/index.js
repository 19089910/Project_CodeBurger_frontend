import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import CartIcon from '../../assets/icon-cart.svg'
import PersonIcon from '../../assets/icon-person.svg'
import { useUser } from '../../hooks/UserContext'
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
  const { pathname } = useLocation()
  const { logout } = useUser()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Conteiner>
      <ConteinerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
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
          <PageLinkExit onClick={logoutUser}>sair</PageLinkExit>
        </ConteinerText>
      </ConteinerRight>
    </Conteiner>
  )
}
