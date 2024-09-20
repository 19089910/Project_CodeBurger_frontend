import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Conteiner, ItemConteiner, ListLink } from './styles'

export function SideMenuAdmin() {
  const { logout } = useUser()
  return (
    <Conteiner>
      <hr />
      {listLinks.map((item) => (
        <ItemConteiner key={item.id} isActive={true}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemConteiner>
      ))}
      <hr />
      <ItemConteiner style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffff' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemConteiner>
    </Conteiner>
  )
}
