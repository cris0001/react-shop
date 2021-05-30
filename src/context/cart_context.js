import React, { useEffect, useContext, useState } from 'react'

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if (cart) {
      return JSON.parse(localStorage.getItem('cart'))
    } else {
      return []
    }
  }

  const [cart, setCart] = useState(getLocalStorage())
  const [totalItems, setTotalItems] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [shipping, setShipping] = useState(666)

  const addToCart = (id, color, amount, product) => {
    const tempItem = cart.find((item) => item.id === id + color)
    if (tempItem) {
      //
      const tempCart = cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount
          if (newAmount > item.max) {
            newAmount = item.max
          }
          return { ...item, amount: newAmount }
        } else {
          console.log('xdd')
          return item
        }
      })
      //

      setCart(tempCart)
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      }
      //setCart((prev) => [...prev, newItem])
      setCart([...cart, newItem])
    }
  }

  const removeItem = (id) => {
    const tempCart = cart.filter((item) => item.id !== id)
    console.log('remove')
    setCart(tempCart)
  }
  const toggleValue = (id, value) => {
    const tempCart = cart.map((item) => {
      const { amount } = item
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = amount + 1
          if (newAmount > item.max) {
            newAmount = item.max
          }
          return { ...item, amount: newAmount }
        }
        if (value === 'dec') {
          let newAmount = amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...item, amount: newAmount }
        }
      } else {
        return item
      }
    })
    setCart(tempCart)
  }

  const clearCart = () => {
    setCart([])
  }

  useEffect(() => {
    const { totalItems, totalAmount } = cart.reduce(
      (total, cartItem) => {
        const { price, amount } = cartItem
        total.totalItems += amount
        total.totalAmount += price * amount

        return total
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    )
    setTotalAmount(totalAmount)
    setTotalItems(totalItems)

    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        toggleValue,
        clearCart,
        shipping,
        totalAmount,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
