import React from 'react'
import { CFormInput, CForm } from '@coreui/react'

function ContactForm() {
    return (
        <div className='row'>
            <div className="formStructure">
                <div className='contactForm'>
                    <CForm>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            label="Your Name"
                            placeholder="Your Name"
                            aria-describedby="exampleFormControlInputHelpInline"
                            className='mb-3 text-dark'
                        />
                        <CFormInput
                            type="email"
                            id="exampleFormControlInput1"
                            label="Email address"
                            placeholder="name@example.com"
                            aria-describedby="exampleFormControlInputHelpInline"
                            className='mb-3 text-dark'
                        />
                        <CFormInput
                            type="Message"
                            id="exampleFormControlInput1"
                            label="Message"
                            placeholder="Message"
                            aria-describedby="exampleFormControlInputHelpInline"
                            className='mb-3 text-dark'
                        />
                    </CForm>
                    <button type="button" class="btn btn-primary buttonColorBlue mt-5">Send</button> 
                </div>
            </div>
        </div>
    )
}

export default ContactForm