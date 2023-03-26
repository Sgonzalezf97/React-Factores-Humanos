import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-4'>
                <Card id="1"/>
            </div>
            <div className='col-md-4'>
                <Card id="2"/>
            </div>
            <div className='col-md-4'>
                <Card id="3"/>
            </div>
            
        </div>
    </div>
  )
}

export default Cards