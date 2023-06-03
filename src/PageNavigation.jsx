import React from 'react'
import { NavLink } from 'react-router-dom'
const PageNavigation = ({title}) => {
  return (
    <div>
        <div className="container">    
         <NavLink className="home" to="/">Home</NavLink>/{title}</div>
   
    </div>
  )
}

export default PageNavigation
