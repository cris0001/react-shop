import React from 'react'
import styled from 'styled-components'
import aboutImg from '../assets/hero-bcg.jpeg'
import { PageHero } from '../components'

const About = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='xd' />
        <article>
          <div className='title'>
            <h2>our story</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            porro non! Consequatur facere rem, atque cumque illum iure tempore
            consectetur similique. Cum esse similique molestias officiis
            voluptas fugit impedit quis, magni, quos earum repellendus obcaecati
            minima corrupti quae tempora sit iste culpa quidem rerum doloremque.
            Itaque reprehenderit beatae iusto nisi.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4em;
  img {
    width: 100%;
    //display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default About
