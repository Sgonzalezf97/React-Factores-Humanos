import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import ContactForm from '../Components/ContactForm'
import '../Components/NavStyle.css'

function Contact() {
    return (
        <>
            <Nav />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact