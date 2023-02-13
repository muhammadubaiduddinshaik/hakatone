import React from 'react'
import './CardItem.css'
import blutoot from './assest/bluetoot.jpg'
import { Close } from '@mui/icons-material'
const CardItem = () => {
  return (
    <>
    <div className='CardItem-main'>
        <div className="card-items">
            <div className="img-container-card"><img src={blutoot} className='img-container'/></div>
            <div className="card-detailed">
                <span className="product-card">Product name</span>
                <Close id="cloed-icon"/>
                <div className="counter-card">
                            <span id='first-span-card'>-</span>
                            <span id='sec-span-card'>6</span>
                            <span id='third-span-card'>+</span>
                        </div>
                        <div className="card-item-text">
                            <span id='first-span-card-mult'>3</span>
                            <span id='sec-span-card-mult'>x</span>
                            <span id='third-span-card-mult'>&#36;12312</span>
                        </div>
            </div>
        </div>   
    </div>
      
            </>
    
  )
}

export default CardItem