import { AddShoppingCart, Clear } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './Card.css'
import CardItem from './cardItem'
const Addcart = ({setcart}) => {
  return (
    <div className='card-main'>
      <div className="opacity-layer"></div>
      <div className="cart-main">
        <div className="header">
          <span className="heading">Shopping Cart</span>
          <span className="closed-btn" onClick={()=>setcart(false)}>
            <Clear style={{fontSize:'30px',border:' 2px solid' , padding:'3px'}}/>
            <span className="closed-text">Closed</span>
          </span>
        </div>
        {/* <div className="empty-card">
          <AddShoppingCart style={{fontSize:'120px',opacity:'0.4',color:'#990011FF'}}/>
          <span className="empt-span">no product in the cart..</span>
          <Button id="button-empt" >RETURN TO SHOP</Button>
        </div> */}
        <>
        <div style={{height:'75vh',width: '100%',overflow:' auto',padding: '5px 0px'}}>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        </div>
        {/* <center>
        <div>
        <div className='line'></div>
        <br/>
        <input type="text" placeholder='name' style={{width:"300px"}}/>
            <input type="text" placeholder='Email' style={{width:"300px"}}/>
            <input type="text" placeholder='Contact no' style={{width:"300px"}}/>
            <input type="text" placeholder='Order Address' style={{width:"300px"}}/>
        </div>
        </center> */}
            <div style={{
    width: '90%',
    margin: 'auto',
    marginTop: '0',
    marginBottom: '0',
    padding: '26px 0px',
    background:'white',
}}>
          <div className='blank-line' style={{borderBottom: '2px solid grey',paddingBottom: '26px'}}><div className="cart-footer">
          <div className="sub-total" style={{background:'white'}}>
            <span className="subtotal-text">Total:</span>
            <span className="subtotal-text-span" style={{color:'rgb(69, 153, 0)',
    marginLeft: '112px',
    fontFamily: 'sans-serif'}}>PKR:1234</span>
          </div></div>
          <input type="text" placeholder='Full Name' style={{width: '100%', padding:' 10px 0px',fontWeight: '600',
    fontSize: '19px',background:'white'
    ,outline: 'none',border: 'none',borderBottom: '2px solid grey',padding:' 10px 0px',fontWeight: '600'}}/>
          <input type="text" placeholder='Email' style={{width: '100%', padding:' 10px 0px',
    fontSize: '19px',outline: 'none',background:'white',fontWeight: '600',border: 'none',borderBottom: '2px solid grey',padding:' 6px 0px'}}/>

          <input type="text" placeholder='Phone Number' style={{width: '100%', padding:' 10px 0px',fontWeight: '600',
    fontSize: '19px',background:'white'
  ,outline: 'none',border: 'none',borderBottom: '2px solid grey',padding:' 10px 0px'}} />
          <input type="text" placeholder='Shipping Address' rows='5' style={{width: '100%', padding:' 10px 0px',
    fontSize: '19px',background:'white'
    ,outline: 'none',border: 'none',fontWeight: '600',padding:' 10px 0px'}}/>
          <div className="blank-line"></div>
        </div>
          <div className="button-subtotal">
            <Button id='button-empt' style={{width:'100%'}}>Place Order</Button>
          </div>
        </div>
        </>
      </div>
    </div>
  )
}

export default Addcart