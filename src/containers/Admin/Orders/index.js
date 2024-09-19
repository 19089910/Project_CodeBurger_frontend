import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import formatData from '../../../utils/formatDate'
import api from './../../../services/api'
import statusOpition from './order-status'
import Row from './row'
import { Conteiner, Menu, LinkMenu } from './styles'
// REVIEWING THE OPERATIONS THAT THE ADMIN IS GOING TO PERFORM.
// get(orders)put(orders/id), post(product), put(producst/id)
function Orders() {
  const [orders, setOrders] = useState([]) // all pedidos
  const [filteredOrders, setFilteredOrders] = useState([]) //  filtered orders for the Menu
  const [activeStatus, setActiveStatus] = useState(0) // stores the id of who is active in the menu
  const [rows, setRows] = useState([])

  // get(orders):
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')
      setOrders(data.orders) // format object to array
      setFilteredOrders(data.orders) // orders copy, id est all copy
    }
    loadOrders()
  }, [])

  // table model
  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatData(order.createdAt),
      status: order.status,
      product: order.products
    }
  }
  // teble controller
  useEffect(() => {
    const newRows = filteredOrders.map((ord) => createData(ord)) // I changed from: "all requests" to: "send the row the requests that the menu wants"
    setRows(newRows)
  }, [filteredOrders]) // if you change the filter, check again the result of all this: row shows what the menu wants

  // Menu filter
  const allstatusOpition = [
    { id: 0, label: 'Todos', value: 'all' },
    ...statusOpition
  ]
  // the status that was clicked in the menu is arriving
  function handleStatus(statusOpition) {
    if (statusOpition.value === 'all') {
      setFilteredOrders(orders) // logic of everyone in the menu...
    } else {
      const newOrders = orders.filter(
        (order) => order.status === statusOpition.value
      )
      setFilteredOrders(newOrders) // have only the orders with the filter
    }
    setActiveStatus(statusOpition.id)
  }

  // update filter
  useEffect(() => {
    //!
    if (activeStatus === 0) {
      setFilteredOrders(orders) // logic of everyone in the menu...
    } else {
      const activeOpitionIndex = statusOpition.findIndex(
        // activeOpitionIndex is index if idStatusOption === idActivestatus
        (sts) => sts.id === activeStatus
      )
      const newFilteredOrders = orders.filter(
        (ord) => ord.status === statusOpition[activeOpitionIndex].value
      )
      setFilteredOrders(newFilteredOrders)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]) //!

  return (
    <Conteiner>
      <Menu>
        {allstatusOpition.map((statusOpition) => (
          <LinkMenu
            key={statusOpition.id}
            onClick={() => handleStatus(statusOpition)}
            isActiveStatus={activeStatus === statusOpition.id}
          >
            {statusOpition.label}
          </LinkMenu>
        ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Conteiner>
  )
}

export default Orders
