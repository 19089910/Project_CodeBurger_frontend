import React, { useEffect, useState } from 'react'

import api from './../../../services/api'
import { Conteiner } from './styles'
// REVIEWING THE OPERATIONS THAT THE ADMIN IS GOING TO PERFORM.
// get(orders)put(orders/id), post(product), put(product/id)

function Orders() {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])

  // get(orders):
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')
      setOrders(data.orders) // format object to array
    }
    loadOrders()
  }, [])

  console.log(orders)
  // table model
  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      product: order.products
    }
  }
  // teble controller
  useEffect(() => {
    const newRows = orders.map((ord) => createData(ord))
    setRows(newRows)
  }, [orders])

  console.log(rows, 'rows')
  return (
    <Conteiner>
      <h2>Orders</h2>
    </Conteiner>
  )
}

export default Orders
