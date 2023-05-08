import React from 'react'
import ProductsList from '../Components/ProductsList'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import '../Components/NavStyle.css'


function Products() {
  return (
    <>
      <Nav />
      <ProductsList />
      <Footer />
    </>
  )
}

export default Products