import React from 'react'
import Info from '../Components/Info'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Faces from '../Components/Faces'
import '../Components/NavStyle.css'




function About() {
  return (
        <div className='About'>
          <Nav />
          <Info />
          <Faces />
          <Footer />
        </div>
  )
  
}
export default About