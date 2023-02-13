import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Addcart from './Addcart'
import { Add } from '@mui/icons-material'

const Header = () => {
    
    
  const [cart , setcart] = useState(false)
    return (
        <>
            <Navbar bg="white" variant="dark" style={{padding: '20px 0px', width: '85%', margin: 'auto'}} >
                <Container>
                    <NavLink to="/" className="text-decoration-none  mx-4" style={{fontWeight: 700,
    fontSize: '38px',
    fontFamily:' sans-serif',color: '#61B846',lineHeight:'36px'}}>SAYLANI WELFARE <br/><span style={{fontSize:' 27px',
      color: '#024F9D',
      margin: '0',
      padding: '0',
      fontFamily: 'revert'}}>DISCOUNT STORE </span></NavLink>
                </Container>
              <ShoppingCartIcon onClick={()=> setcart(true)} style={{color:"black",fontSize: '56px',cursor:'pointer'}}/>
                
            </Navbar>
          {cart && <Addcart setcart={setcart} />}
        </>
    )
}

export default Header