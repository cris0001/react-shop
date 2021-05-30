import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import { Navbar, Sidebar, Footer } from './components'
import {
  ProductsPage,
  Home,
  About,
  SingleProduct,
  Error,
  Checkout,
  Private,
  Cart,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <ProductsPage />
        </Route>
        <Route path='/products/:id' children={<SingleProduct />} />
        <Private exact path='/checkout'>
          <Checkout />
        </Private>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
