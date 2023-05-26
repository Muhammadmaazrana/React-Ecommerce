import React from 'react'
import image from "../src/images/hero.jpg"
import { Link } from 'react-router-dom'

function HeroSection({myData}) {
    const { name }=myData;
  return (
    <div className='container my-5'><br /><br />
        <div className="row">
            <div className="col-md-6">
      <p>Welcome To</p>
      <h1>{name}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint quis tenetur ipsam tempora, earum sequi dolorem quos, delectus nam error suscipit voluptatibus dolor nisi quo voluptates voluptas doloremque. Quisquam.</p>
      <Link className='shopnow' to="/" >
    <button className='btn btn-primary shopnow'>Shop Now</button>
   </Link>
    </div>
    <div className="col-md-6">
        <img src={image} className='hero-image' width={"80%"} alt="" />
    </div>
    
    </div><br /><br /><br />
  
    </div>
  )
}

export default HeroSection
