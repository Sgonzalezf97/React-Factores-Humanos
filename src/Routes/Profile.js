import React from 'react'
import ProfileView from '../Components/ProfileView'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import '../Components/NavStyle.css'

function Profile() {
    return (
        <div className='About'>
          <Nav />
          <ProfileView />
          <Footer />
        </div>
    )
}

export default Profile