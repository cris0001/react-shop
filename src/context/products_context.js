import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { products_url as url } from '../utils/constants'

const ProductsContext = React.createContext()

const ProductsProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [sLoading, setSingleLoading] = useState(false)
  const [sError, setSinglePError] = useState(false)
  const [sProduct, setSingleProduct] = useState([])
  const [pLoading, setPLoading] = useState(false)
  const [pError, setPError] = useState(false)
  const [products, setProduct] = useState([])
  const [featured_products, setFeatured] = useState([])

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const fetchProducts = async (url) => {
    setPLoading(true)
    console.log('start')
    try {
      const response = await axios.get(url)
      const products = response.data
      const featured = products.filter((product) => product.featured === true)
      setFeatured(featured)
      setPLoading(false)
      setProduct(products)
      console.log('pobrano produkty')
      console.log(products)
      console.log(featured)

      console.log(products)
    } catch (err) {
      setPLoading(false)
      console.log(err)
    }
  }

  const fetchSingleProduct = async (url) => {
    setSingleLoading(true)
    console.log('pobieranie pojedynczego produktu')
    try {
      const response = await axios.get(url)
      const singleProduct = response.data
      setSingleProduct(singleProduct)
      console.log('pobrano singleprod')
      console.log(singleProduct)
      setSingleLoading(false)
    } catch (err) {
      console.log(err)
      setSingleLoading(false)
      setSinglePError(true)
    }
  }

  useEffect(() => {
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        isSidebarOpen,
        fetchSingleProduct,
        sLoading,
        sError,
        sProduct,
        pLoading,
        pError,
        products,
        openSidebar,
        closeSidebar,
        featured_products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = () => {
  return useContext(ProductsContext)
}

export { ProductsProvider, ProductsContext, useProductsContext }
