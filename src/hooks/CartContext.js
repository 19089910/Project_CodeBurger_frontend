import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})
// context structure:
// teg html structure for data transit
export const CartProvider = ({ children }) => {
  // state variable to serve as temporary storage
  // so the provider context can fetch or store data
  const [cartProducts, setCartProducts] = useState([]) // is a list of products

  // write or record on the local storage
  const putProductsInCart = async (product) => {
    console.log(product)
  }

  // capture or get user information in local storage
  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:CartInfo')
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ cartProducts, putProductsInCart }}>
      {children}
    </CartContext.Provider>
  )
}
// context provide:
// the data to be available to the screens their container uses the useCart function... function and the result of the Cart context:
export const useCart = () => {
  const context = useContext(CartContext)
  // here only if, by some mistake, we invoke useUser and it is empty, it tells the console that the problem is here.
  if (!context) {
    throw new Error('useCart most be used with CartContext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
