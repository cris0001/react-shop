import React, { useEffect, useContext, useState } from 'react'

import { useProductsContext } from '../context/products_context'

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()

  const [filtered_products, setFiltered] = useState([])
  const [all_products, setAllProducts] = useState([])
  const [gridView, setGridView] = useState(true)
  const [sort, setSort] = useState('name-a')
  const [filters, setFilters] = useState({
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  })

  const listDisplay = () => {
    setGridView(false)
  }
  const gridDisplay = () => {
    setGridView(true)
  }

  const updateSort = (e) => {
    const value = e.target.value
    setSort(value)
  }

  useEffect(() => {
    const {
      text,
      company,
      category,
      color,
      min_price,
      price,
      max_price,
      shipping,
    } = filters
    //let temp2 = [...all_products]
    let tempProd = [...all_products]
    //sortowanie
    if (sort === 'name-a') {
      tempProd = tempProd.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      setFiltered(tempProd)
    }
    if (sort === 'name-z') {
      tempProd = tempProd.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
      setFiltered(tempProd)
    }
    if (sort === 'price-lowest') {
      tempProd = tempProd.sort((a, b) => a.price - b.price)
      setFiltered(tempProd)
    }
    if (sort === 'price-highest') {
      tempProd = tempProd.sort((a, b) => b.price - a.price)
      setFiltered(tempProd)
    }
    //filtrowanie

    if (filters.text) {
      tempProd = tempProd.filter((product) => {
        return product.name.toLowerCase().startsWith(filters.text)
      })
      setFiltered(tempProd)
    }

    if (category !== 'all') {
      tempProd = tempProd.filter((product) => {
        return product.category === category
      })
      setFiltered(tempProd)
    }
    if (color !== 'all') {
      tempProd = tempProd.filter((product) => {
        return product.colors.find((col) => col === color)
      })
      setFiltered(tempProd)
    }

    if (company !== 'all') {
      tempProd = tempProd.filter((product) => {
        return product.company === company
      })
      setFiltered(tempProd)
    }
    if (shipping) {
      tempProd = tempProd.filter((product) => product.shipping === true)
    }
    setFiltered(tempProd)

    tempProd = tempProd.filter((product) => {
      return product.price <= price
    })
    setFiltered(tempProd)
  }, [products, sort, filters])

  useEffect(() => {
    let maxPrice = products.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)
    // setFilters((prevState) => ({
    //   ...prevState,
    //   max_price: 3,
    // }))
    //setFilters({ ...filters, max_price: 309999, price: 309999 })
    setFilters({ ...filters, max_price: maxPrice, price: maxPrice })
    console.log(maxPrice)
    console.log(filters)
    setAllProducts([...products])
    setFiltered([...products])
  }, [products])

  const updateFilters = (e) => {
    let name = e.target.name

    let value = e.target.value
    console.log(value)
    console.log(name)
    console.log(filters)

    setFilters({ ...filters, [name]: value })
    // console.log('text')
    // console.log(filters)
    // console.log('text')
  }
  const updateFilters2 = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(value)
    console.log(name)
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }

    if (name === 'price') {
      value = Number(value)
    }

    if (name === 'shipping') {
      value = e.target.checked
    }
    setFilters({ ...filters, [name]: value })
    console.log('c')
    console.log(filters)
    console.log('c')
  }
  const clearFilters = () => {
    setFilters({
      ...filters,
      text: '',
      company: 'all',
      category: 'all',
      color: 'all',
      price: filters.max_price,
      shipping: false,
    })
  }

  return (
    <FilterContext.Provider
      value={{
        all_products,
        filtered_products,
        gridView,
        listDisplay,
        gridDisplay,
        updateSort,
        sort,
        updateFilters,
        clearFilters,
        filters,
        updateFilters2,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
