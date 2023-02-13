import React from 'react'
import Slider from './Slider'
import './Main.css'
import Shop from './Shop'
import image1 from './assest/beef.jpg'
import image2 from './assest/cardimage1.svg'
import image3 from './assest/cardimage2.svg'
import { useState } from 'react'
import Footer from './Footer'
import { Search } from '@mui/icons-material'
function Main() {

  const [count,setCount]=useState(0)
  return (
    <>
    <Slider/>
   
   <br/><br/>

    <div className="container">
    
      <div style={{display:'flex',alignItems: 'center',justifyContent: 'center',background: 'rgb(229, 233, 235)',
    borderRadius: '30px',   padding: '5px 20px'}}><span><Search style={{fontSize: '45px',
      color: 'grey',
      paddingRight:' 13px'
  }
  } /></span><input className='search' type="text" placeholder=' Search by product name'/></div> 
      <br></br>
      <br></br>
  <h3 style={{fontSize: '37px' ,fontFamily: 'sans-serif ',fontWeight: '700'}}>Shop by Categery </h3>
<Shop/>
<br></br>
<br></br>

<div className='Products-Card'>
        <div className="card mb-3" style={{border: 'none',
    width: '95%',
    margin: 'auto'}} >
  <div className="row g-0" style={{display:'flex'}}>
    <div className="col-md-4" style={{width:'30%'}}>
      <img src={image1} width='100%' className="img-fluid rounded-start" alt="..." />
    </div>
        <div className="col-md-8" style={{width:'70%'}}>
      <div className="card-body"style={{marginTop: '40px'}}>
        <h5 className="card-title" style={{width:'97%',fontSize:'39px',
    margin: 'auto',
    fontSize: '30px'}}>Meet<span style={{    marginLeft: '55%',fontSize: '23px',
  }}>Rs.800-per Kg</span></h5>
        <p className="card-text" style={{width: '67%',fontSize:'23px',
}}>   This is product description This is abc product description  </p>
        <button id='button-product' >+</button>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{border: 'none',
    width: '95%',
    margin: 'auto'}} >
  <div className="row g-0" style={{display:'flex'}}>
    <div className="col-md-4" style={{width:'30%'}}>
      <img src={image2}width='100%' className="img-fluid rounded-start" alt="..." />
    </div>
        <div className="col-md-8" style={{width:'70%'}}>
      <div className="card-body"style={{marginTop: '40px'}}>
        <h5 className="card-title" style={{width:'97%',fontSize:'39px',
    margin: 'auto',
    fontSize: '30px'}}>Fish<span style={{    marginLeft: '55%',fontSize: '23px',
  }}>Rs.800-per Kg</span></h5>
        <p className="card-text" style={{width: '67%',fontSize:'23px',
}}>   This is product description This is abc product description  </p>
        <button id='button-product' >+</button>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{border: 'none',
    width: '95%',
    margin: 'auto'}}>
  <div className="row g-0" style={{display:'flex'}}>
    <div className="col-md-4" style={{width:'30%'}}>
      <img src={image3}width='100%' className="img-fluid rounded-start" alt="..." />
    </div>
        <div className="col-md-8" style={{width:'70%'}}>
      <div className="card-body"style={{marginTop: '40px'}}>
        <h5 className="card-title" style={{width:'97%',fontSize:'39px',
    margin: 'auto',
    fontSize: '30px'}}>Beef Qeema<span style={{    marginLeft: '43%',fontSize: '23px',
  }}>Rs.800-per Kg</span></h5>
        <p className="card-text" style={{width: '67%',fontSize:'23px',
}}>   This is product description This is abc product description  </p>
        <button id='button-product' >+</button>
      </div>
    </div>
  </div>
</div>


    </div>



<Footer/>

   </div>
    </>
  )
}

export default Main