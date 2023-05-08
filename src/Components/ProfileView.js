import React , { useState }from 'react'
import '../Components/NavStyle.css'
import imagen2 from '../Assets/Sebastian.png'
import imagenCard from '../Assets/CreditCard.jpg'
import ModalView from './ModalView'


function ProfileView() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100 mb-5">
                    <div className="col col-lg-10 mb-4 mb-lg-0">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4 px-3 gradient-custom text-center text-white">
                                    <img src={imagen2} alt="Avatar" className="img-fluid my-5 rounded-circle" />
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h3>Basic Information</h3>
                                        <hr className="mt-0 mb-4"></hr>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Name</h6>
                                                <p className="text-muted">Sebastian </p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Last Name</h6>
                                                <p className="text-muted">Gonzalez</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">info@example.com</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">123 456 789</p>
                                            </div>
                                        </div>
                                        <h6>History</h6>
                                        <hr className="mt-0 mb-4"></hr>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>purchased items</h6>
                                                <p className="text-muted">6</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-5 px-3 gradient-custom text-center text-white">
                                    <img src={imagenCard} alt="Avatar" className="img-fluid my-5    " />
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body p-4">
                                        <h3>Card Information</h3>
                                        <hr className="mt-0 mb-4"></hr>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Card number</h6>
                                                <p className="text-muted">123456789 </p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Exp Date</h6>
                                                <p className="text-muted">15/08/2025</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>CVV</h6>
                                                <p className="text-muted">439</p>
                                            </div>
                                        </div>
                                        <hr className="mt-0 mb-4"></hr>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Propietary</h6>
                                                <p className="text-muted">Juan Sebastian Gonzalez</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary buttonColorBlue" onClick={handleShow}>New Card</button> 
                        <ModalView show={show} handleClose={handleClose} title="Nueva tarjeta" body="Se ha agreagado una nueva tarjeta !"/>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ProfileView