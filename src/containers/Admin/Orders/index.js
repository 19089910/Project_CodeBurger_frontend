// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
// import Box from '@mui/material/Box'
// import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import Typography from '@mui/material/Typography'
// import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import api from './../../../services/api'
import Row from './row'
import { Conteiner } from './styles'
// REVIEWING THE OPERATIONS THAT THE ADMIN IS GOING TO PERFORM.
// get(orders)put(orders/id), post(product), put(producst/id)
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
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Conteiner>
  )
}

export default Orders
