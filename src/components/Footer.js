import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h5>2k21</h5>
      <span>B)</span>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  height: 100px;
  background: var(--clr-black);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--clr-primary-5);

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 777px) {
    flex-direction: row;
  }
`

export default Footer
