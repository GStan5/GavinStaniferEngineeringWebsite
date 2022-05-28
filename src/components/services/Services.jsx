import React from 'react'
import './services.scss'

import Frontend from './Frontend'
import Blockchain from './Blockchain'
import Backend from './Backend'

const Services = () => {
  return (
    
    <section id="services">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <h5>What I Offer</h5>
      <h2 className="text-light">Services</h2>

      <div className="container services__container">
      
        <Frontend />
        <Blockchain />
        <Backend />
      
      </div>

    </section>
  )
}

export default Services