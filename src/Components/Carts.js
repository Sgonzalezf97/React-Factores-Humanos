import React from 'react'
import CartAdded from './CartAdded'
import Imagen from '../Assets/PCFH4.jpg'

function Carts() {
  return (
    <div className='container'>
      <div className='row'>
        <h2 className='m-3'>Added Items:</h2>
        <div className='col-md-4'>
          <CartAdded
            id="1"
            Price="3.500.000 COP"
            image={Imagen}
            desc="Portátil Gamer HP OMEN 16-n0023dx 16 AMD Ryzen 7 6800H RTX 3060 6GB Ram 16GB DDR5 M.2 512GB"
            Title="PC-OMEN"
          />
        </div>
        <div className='m-3 col-md-6'> 
          <h2>Total: 3.500.000 COP</h2>
          <h2>ITEM:<h3> Portátil Gamer HP OMEN 16-n0023dx 16 AMD Ryzen 7 6800H RTX 3060 6GB Ram 16GB DDR5 M.2 512GB</h3></h2> 

        </div>
      </div>
      <button type="button" className="btn btn-primary btn-block mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Pay All  <i className="bi bi-credit-card-fill"></i></button>

      <div className="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Completed</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              your transaction was completed correctly!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Carts