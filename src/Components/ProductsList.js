import React from 'react'
import Card from './Card'
import Imagen from '../Assets/PCFH4.jpg'
import Imagen1 from '../Assets/PCFH3.jpg'
import Imagen2 from '../Assets/intel.jpeg'
import Imagen3 from '../Assets/ddr4.jpeg'
import Imagen4 from '../Assets/ssd.png'


function ProductsList() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Card
                        id="1"
                        Price="3.500.000 COP"
                        image={Imagen}
                        desc="Portátil Gamer HP OMEN 16-n0023dx 16 AMD Ryzen 7 6800H RTX 3060 6GB Ram 16GB DDR5 M.2 512GB"
                        Title="PC-OMEN"
                    />
                </div>
                <div className='col-md-4'>
                    <Card
                        id="2"
                        Price="450.000 COP"
                        image={Imagen2}
                        desc="Portátil Gamer HP OMEN 16-n0023dx 16 AMD Ryzen 7 6800H RTX 3060 6GB Ram 16GB DDR5 M.2 512GB"
                        Title="Intel Core i7"
                    />
                </div>
                <div className='col-md-4'>
                    <Card
                        id="3"
                        Price="300.000 COP"
                        image={Imagen3}
                        desc="Memoria RAM ADATA de 4 GB de capacidad, DDR4 2400(17) X8 SO-DIMM 1.2V 10410078 AD4S2400W4g"
                        Title="RAM DDR4 ADATA"
                    />
                </div>
                <div className='col-md-4'>
                    <Card
                        id="4"
                        Price="100.000 COP"
                        image={Imagen4}
                        desc="Disco de estado Solido SSD de 480 GB de capacidad  2.5 SATA 6Gb/s SU650 3D NAND"
                        Title="SSD ADATA"
                    />
                </div>
                <div className='col-md-4'>
                    <Card
                        id="5"
                        Price="549,000 COP"
                        image={Imagen1}
                        desc="Caja E-ATX Cooler Master MasterBox TD500 CRYSTAL ARGB Dimensiones: 493 x 217 x 469mm"
                        Title="PC-CASE"
                    />
                </div>


            </div>
        </div>
    )
}

export default ProductsList