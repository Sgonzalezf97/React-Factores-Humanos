import React from 'react'
import imagen1 from '../Assets/Logo.png'
import AppStore from '../Assets/app-store-badge.svg'
import GooglePlay from '../Assets/google-play-badge.svg'
function Footer() {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <div className='pt-1'>
                <div className="container text-center text-md-start mt-5">

                    <div className="row">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <div className="logo d-flex">
                                <a href="index.html"><img src={imagen1} alt="Logo" className="img-logo"></img></a>
                                <h1 className='center-nav mx-3'><a href="index.html"><span style={{ color: "black" }}>Marketplace</span></a></h1>
                            </div>
                            <p>
                                Proyecto para Factores Humanso de la universidad Distrital sobre un Marketplace de componentes computacionales.
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <div>
                                <i className="bi bi-instagram m-1"></i>
                                <i className="bi bi-facebook m-1"></i>
                                <i className="bi bi-whatsapp m-1"></i>
                                <i className="bi bi-twitter"></i>
                                
                            </div>
                            <p>
                                <i className="fas fa-home me-1"></i> Bogotá , Col
                                <i className="fas fa-envelope me-1"></i><br className='m-1'></br>info@udesarrolladores.com
                                <i className="fas fa-phone me-1"></i> <br className='m-1'></br>+ 01 234 567 88
                            </p>
                            <p></p>
                        </div>
                        <div className="me-5 d-none d-lg-block text-center">
                            <p>Get connected with us on social networks:</p>
                            <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src={GooglePlay} alt="Google play store" title='Google play store'></img></a>
                            <a href="#!"><img className="app-badge" src={AppStore} alt="Apple store" title='Apple store'></img></a>

                        </div>

                    </div>

                </div>
            </div>

            <div className="text-center p-4">
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="#" title='Udesarrolladores web'> Udesarrolladores.com</a>
            </div>

        </footer>

    )
}

export default Footer