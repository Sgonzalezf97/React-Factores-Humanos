import React from 'react'
import imagen1 from '../Assets/PCFH4.jpg'

  let Agregar =(valor)=>{ 
    document.getElementById('btn-carrito'+valor).classList.add("art-agregado");
    alert('Se ha agregado correctamente el producto al carrito');
  }
 

function Card({id,Price,image,desc,Title}) {
  return (
    <div className='card bg-light-blue-card p-3 my-3'>
      <img src={image} alt="PC 1" style={{margin:"20px"}} title={Title} className='img-card'></img>
      <div className='card-body'>
        <h4 className='card-tittle text-dark'>{Title}</h4>
        <p className='card-text text-secondary'>{desc}</p>
        <p className='text-dark'>Price:{Price}</p>
        <button type="button" className="btn btn-primary btn-lg btn-floating btn-compra" title='Agregar al carrito' id={'btn-carrito'+id} onClick={() => Agregar(id)} >
        <i class="bi bi-cart-check"></i>
        </button>
      </div>
    </div>
  )
}

export default Card