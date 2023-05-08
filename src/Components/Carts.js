import React , { useState } from 'react'
import CartAdded from './CartAdded'
import Imagen from '../Assets/PCFH4.jpg'
import ModalView from './ModalView';

function Carts() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <button type="button" className="btn btn-primary btn-block mb-3" onClick={handleShow}>Pay All  <i className="bi bi-credit-card-fill"></i></button>
      <ModalView show={show} handleClose={handleClose} title="Pago realizado" body="Se ha realizado exitosamente su compra, el valor de su compra ha sido por: 3.500.000 COP"/>

    </div>
  )
}

export default Carts