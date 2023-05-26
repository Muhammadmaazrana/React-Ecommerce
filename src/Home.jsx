import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Terusted from './Terusted'
import Footer from './footer'
function Home() {

   const data={
      name:"MaazStore"
    }
  return (
    <div>
      <HeroSection myData={data}/>
      <Services/>
    <Terusted/>
    <Footer/>
    </div>
  )
}

export default Home
