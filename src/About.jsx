import React from 'react'
import HeroSection from './HeroSection'
import { useProductContext } from './context/ProductContext'

function About() {
// const myName = useContext(AppContext)
const {myName}=useProductContext();

    const data={
        name:"Maaz E-commerce"
      }
  return (
    <div>
      {myName}
      <HeroSection myData={data}/>
    </div>
  )
}

export default About
