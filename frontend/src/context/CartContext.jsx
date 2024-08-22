import React, { useContext, useReducer } from 'react'

const CartContext = React.createContext()

const ACTIONS = { ADD_T0_CART: 1, REMOVE_TO_CART: 2 }

export function useCartContext() {
  return useContext(CartContext)
}

class CartProduct {
  constructor(productId, quantity) {
    this.productId = productId
    this.quantity = quantity
  }

  getId = () => {
    return this.productId
  }

  getQuantity = () => {
    return this.quantity
  }

  setQuantity = (quantity) => {
    this.quantity = quantity
  }
}

const reducerFunction = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_T0_CART: {
      const { id, quantity } = action.payload

      const updatedCart = state.map((product) =>
        product.getId() == id
          ? new CartProduct(product.getId(), product.getQuantity() + quantity)
          : product
      )

      const productExists = state.some((product) => product.getId() == id)

      if (!productExists) {
        updatedCart.push(new CartProduct(id, quantity))
      }

      return updatedCart
    }

    case ACTIONS.REMOVE_TO_CART: {
      const { id } = action.payload

      return state.filter((product) => product.getId() != id)
    }

    default:
      return state
  }
}

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducerFunction, [])

  console.log(cart)

  return (
    <CartContext.Provider value={{ cart, dispatch, ACTIONS }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
