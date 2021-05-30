import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
//import { useProductsContext } from '../context/products_context222'
import { useProductsContext } from '../context/products_context'

import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'

const SingleProduct = () => {
  const { id } = useParams()
  console.log('asdasdasdasdasdasdasd')
  console.log(id)
  const history = useHistory()

  const {
    sLoading: loading,
    sError: error,
    sProduct: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    console.log('dddddddddddddddddddddddddddddddddddddddddddddd')
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
    if (error) {
      return <Error />
    }
  }

  const {
    id: idd,
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    company,
    images,
  } = product || {}

  console.log('log produktu')
  console.log(product)

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link
          onClick={() => console.log(product)}
          to='/products'
          className='btn'
        >
          back to products
        </Link>

        <div className='product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Avaliable : </span>
              {stock > 0 ? 'in stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>Id : </span>
              {idd}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProduct