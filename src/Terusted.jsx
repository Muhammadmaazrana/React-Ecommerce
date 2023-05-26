import React from 'react'
import image from "../src/images/comp2.png"
import image1 from "../src/images/R (1).png"
import image2 from "../src/images/business-company-logo-4A111D4E18-seeklogo.com.png"
import image3 from "../src/images/business-management-company-logo-D0F8678051-seeklogo.com.png"

function Terusted() {
  return (
    <div className='trusted my-5'>
     <h6>Trusted by 1000+ companies</h6>
     <div className="container">
     <div className="row">
        <div className="col-md-3">
        <img src={image} alt="" width={"40%"} />
        </div>
        <div className="col-md-3">
        <img src={image1} alt="" width={"40%"} />
        </div>
        <div className="col-md-3">
        <img src={image2} alt="" width={"30%"} />
        </div>
        <div className="col-md-3">
        <img src={image3} alt="" width={"30%"} />
        </div>
     </div></div>

    
    
    </div>

  )
}

export default Terusted
