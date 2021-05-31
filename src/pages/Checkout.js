import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'

const Checkout = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h3>your cart is empty</h3>
            <Link to='/' className='btn'>
              Home
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .empty {
    text-align: center;
  }
`

export default Checkout
