import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { PageHero, CartContent } from '../components'

const Cart = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>your cart is empty</h2>
          <Link className='btn' to='/products'>
            check our products
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PageHero title='cart' />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .empty {
    margin-top: 3em;
    text-align: center;
  }
  h2 {
    margin-bottom: 1em;
  }
`

export default Cart
