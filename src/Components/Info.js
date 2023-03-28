import React from 'react'
import '../Components/NavStyle.css'
import Carousel from 'react-bootstrap/Carousel';
import imagen from '../Assets/bg-corp.jpg'
import imagen2 from '../Assets/bg-corp2.jpg'

function Info() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='overlay-carousel'>
                    <img
                        className="d-block img-main-carousel"
                        src={imagen}
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Udesarrolladores</h3>
                    <p>Udesarrolladores es una empresa que busca dar a todos sus clientes gran comodidad y facilidad de uso</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='overlay-carousel'>
                    <img
                        className="d-block img-main-carousel"
                        src={imagen2}
                        alt="Second slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>Marketplace Digital</h3>
                    <p>Esta es una tienda virtual de productos de computación </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Info