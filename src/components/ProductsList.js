import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductsList = () => {
  const { filtered_products, gridView } = useFilterContext()

  if (filtered_products < 1) {
    return <h5> no products</h5>
  }

  if (gridView === false) {
    return <ListView products={filtered_products} />
  }

  return <GridView products={filtered_products}>product list</GridView>
}

export default ProductsList
