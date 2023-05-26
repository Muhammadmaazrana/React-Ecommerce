import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products"
import Contact from "./Contact";
import SingleProduct from "./SingleProduct"
import Cart from "./Cart"
import Navbar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return <BrowserRouter>
      <Navbar/>

  <Routes>
    <Route path="/" exact element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/singleproduct/:id" element={<SingleProduct />}/>
    <Route path="/cart" element={<Cart />}/>

  </Routes>
  </BrowserRouter>;
};

export default App;
