import React, { useEffect, useState } from 'react'

import api from './../../../services/api'
import { Conteiner } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')
      setOrders(data)
    }
    loadOrders()
  }, [])

  console.log(orders)

  return (
    <Conteiner>
      <h2>Orders</h2>
    </Conteiner>
  )
}

export default Orders
