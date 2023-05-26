import React from 'react'
import HeroSection from './HeroSection'

function About() {
    const data={
        name:"Maaz E-commerce"
      }
  return (
    <div>
      <HeroSection myData={data}/>
    </div>
  )
}

export default About
