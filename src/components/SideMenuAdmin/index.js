import React from 'react'

import listLinks from './menu-list'
import { Conteiner, ItemConteiner, ListLink } from './styles'

export function SideMenuAdmin() {
  return (
    <Conteiner>
      <hr />
      {listLinks.map((item) => (
        <ItemConteiner key={item.id}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemConteiner>
      ))}
      <hr />
    </Conteiner>
  )
}
