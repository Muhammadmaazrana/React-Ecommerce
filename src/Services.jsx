import React from 'react'
import { TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"
function Services() {
    return (
        <div className='container my-5'>
            <div className="services my-5">
                {/* <div className="row"> */}
                    {/* <div className="col-md-3 icon1"> */} 
                    <div className='icon1'>
                        <TbTruckDelivery className="icon" style={{color:"grey",fontSize:"5rem"}} />
                        <h4>Super fast and Free Delivery</h4></div>
                    {/* </div> */}
                    {/* <div className="col-md-3 icon2 "> */}
                    <div className='icon1'>
                        <MdSecurity className="icon" style={{color:"grey",fontSize:"5rem"}} />
                        <h4>Non-contact Shipping</h4></div>
                        {/* </div> */}
                    {/* <div className="col-md-3 icon3" > */}
                    <div className='icon1'>
                        <GiReceiveMoney className="icon" style={{color:"grey",fontSize:"5rem"}} />
                        <h4>Money-back Guaranteed</h4></div>
                        {/* </div> */}
                    
                    {/* <div className="col-md-3 icon4"> */}
                    <div className='icon1'>
                        <RiSecurePaymentLine className="icon" style={{color:"grey",fontSize:"5rem"}} />
                        <h4>Super-Secure Payment System</h4>  </div> 
                                 {/* </div> */}
                </div>
                {/* </div><br /> */}

            </div>
    )
}

export default Services
