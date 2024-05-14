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
  const putProductInCart = async (product) => {
    /**
     * if this product is already in cartProducts, i.e. it has already been placed in the cart...
     * we'll use findIndex to search inside "cartProducts" if there is a "Product" which is the data
     * of the product just clicked on... if there is, findIndex will give me the position of the CartProducts array.
     */
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)
    /**
     * "if" we can differentiate the -1, i.e. add a new product or just increase the quantity of the existing product.
     * else = deals with cases where there is no product in the cart
     * if = it's about adding quantity
     */
    if (cartIndex !== -1) {
      const newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity += 1
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      setCartProducts([...cartProducts, product])
    }

    await localStorage.setItem(
      'codeburger:cartInfo',
      JSON.stringify(cartProducts)
    )
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
    <CartContext.Provider value={{ cartProducts, putProductInCart }}>
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