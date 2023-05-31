import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Terusted from './Terusted'
import Footer from './footer'
import FeatureProducts from './FeatureProducts'
function Home() {

   const data={
      name:"MaazStore"
    }
  return (
    <div>
      <HeroSection myData={data}/>
      <FeatureProducts/>
      <Services/>
    <Terusted/>
    <Footer/>
    </div>
  )
}

export default Home
