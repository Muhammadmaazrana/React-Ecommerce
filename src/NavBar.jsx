import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand logo" to="/"> </Link>Maaz<font style={{color: "#5b5bf2"}}>Store</font>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse list" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="singleproduct/:id">SingleProduct</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link cart-trolley--link" to="/cart">
            <FiShoppingCart className="cart-trolley"/>
            <span className='cart-total'>10</span>
          </Link>
        </li>
      
      
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}
