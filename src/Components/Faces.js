import React from 'react'
import imagen from '../Assets/Rios.jpg'
import imagen1 from '../Assets/Marcela.jpg'
import imagen2 from '../Assets/Sebastian.png'

function Faces() {
    return (<>
        <h1 className='text-center m-5'>Founders</h1>
        <div className="container mt-5">

            <div className="row">
                <div className="col-lg-4 text-center">
                    <img className="rounded-circle" src={imagen1} alt="Generic placeholder image" width="140" height="140"></img>
                    <h2>Marcela Porras</h2>
                    <p>Estudiante de Ingenieria de sistemas de la universidad Distrital Francisco José de Caldas en octavo semestre, se encuentra realizando un proyecto de un marketplace digital para el curso de Factores Humanos </p>
                    <p><a className="btn btn-secondary" href="https://www.udistrital.edu.co/inicio" role="button">View details »</a></p>
                </div>
                <div className="col-lg-4 text-center">
                    <img className="rounded-circle" src={imagen2} alt="Generic placeholder image" width="140" height="140"></img>
                    <h2>Sebastian Gonzalez</h2>
                    <p>Estudiante de Ingenieria de sistemas de la universidad Distrital Francisco José de Caldas en noveno semestre, se encuentra realizando un proyecto de un marketplace digital para el curso de Factores Humanos </p>
                    <p><a className="btn btn-secondary" href="https://www.udistrital.edu.co/inicio" role="button">View details »</a></p>
                </div>
                <div className="col-lg-4 text-center">
                    <img className="rounded-circle" src={imagen} alt="Generic placeholder image" width="140" height="140"></img>
                    <h2>Santiago Rios</h2>
                    <p>Estudiante de Ingenieria de sistemas de la universidad Distrital Francisco José de Caldas en noveno semestre, se encuentra realizando un proyecto de un marketplace digital para el curso de Factores Humanos </p>
                    <p><a className="btn btn-secondary" href="https://www.udistrital.edu.co/inicio" role="button">View details »</a></p>
                </div>

            </div>

        </div>
    </>

    )
}

export default Faces