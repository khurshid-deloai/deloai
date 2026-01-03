import React from 'react'
import AboutHero from '../components/about/Hero'
import FounderSection from '../components/about/Founder'
import Team from '../components/about/Team'
import GetInTouch from '../components/GetInTouch'

const About = () => {
  return (
    <div>
        <AboutHero />
        <FounderSection />  
        <Team />    
        <GetInTouch />
    </div>
  )
}

export default About