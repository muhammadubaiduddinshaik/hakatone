import React from 'react'
import img1 from './assest/image1.svg';
import img2 from './assest/image2.svg';
import img3 from './assest/image3.svg';

function Shop() {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-4 g-4 hp" style={{paddingTop: '30px'}}>
  <div className="col">
    
      <img src={img1} className="card-img-top" alt="..." style={{width:'100%'}} />
      <div className="card-body">
        <h5 className="card-title text-center">Fruits</h5>
  
    </div>
  </div>
  <div className="col c1">
      <img src={img2} className="card-img-top" alt="..." style={{width:'100%'}} />
      <div className="card-body">
        <h5 className='card-tittle text-center'>Grocery</h5>
    </div>
  </div>
  <div className="col c1">
      <img src={img3} className="card-img-top" alt="..." style={{width:'100%'}} />
      <div className="card-body">
        <h5 className="card-title text-center">Vagetable</h5>
      </div>
  </div>
  <div className="col c1">
      <img src={img2} className="card-img-top" alt="..." style={{width:'100%'}}/>
      <div className="card-body">
        <h5 className="card-title text-center">Grocery</h5>
    </div>
  </div>

</div>

    
    </>
  )
}

export default Shop