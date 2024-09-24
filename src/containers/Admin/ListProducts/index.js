import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Conteiner } from './styles'

function ListProducts() {
  const [products, setProducts] = useState([])

  // get(products):
  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data.products)
    }
    loadProducts()
  }, [])

  return (
    <Conteiner>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Produtos em oferta</TableCell>
              <TableCell>imagem</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.offer}</TableCell>
                <TableCell>
                  <img src={product.url} alt="imagem-produto" />
                </TableCell>
                <TableCell>
                  <button>Editar</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Conteiner>
  )
}

export default ListProducts
