import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero-bcg.jpeg'
import hero2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi
          maxime natus error soluta amet doloremque neque vitae asperiores est.
        </p>
        <Link className='btn big-btn' to='/products'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={hero1} alt='xd' className='hero1-img' />
        <img src={hero2} alt='xd' className='hero2-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 10em;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .big-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .hero1-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .hero2-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
