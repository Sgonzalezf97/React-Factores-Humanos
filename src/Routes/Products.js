import React from 'react'
import ProductsList from '../Components/ProductsList'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import '../Components/NavStyle.css'


function Products() {
  return (
    <div className=''>
          <Nav />
          <ProductsList />
          <Footer />
        </div>
  )
}

export default Products