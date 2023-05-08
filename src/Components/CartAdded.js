import React from 'react'
import imagen1 from '../Assets/PCFH4.jpg'

function CartAdded({id,Price}) {
    return (
        <div className='card bg-light-blue-card p-3 my-3'>
            <img src={imagen1} alt="PC 1" style={{ margin: "20px" }} title="PC-OMEN"></img>
            <div className='card-body'>
                <h4 className='card-tittle text-dark'>Portatil Omen</h4>
                <p className='card-text text-secondary'>Portátil Gamer HP OMEN 16-n0023dx 16" AMD Ryzen 7 6800H RTX 3060 6GB Ram 16GB DDR5 M.2 512GB</p>
                <p className='text-dark'>Price:{Price}</p>
            </div>
        </div>
    )
}

export default CartAdded