import React from 'react'
import './about.scss'

import { FaAward } from 'react-icons/fa'

import DevStackVisual from './ThreeJS/DevStackVisual'

const About = () => {
  return (
    <section id="about">
      <h5>Background</h5>
      <h2 className="text-light">About Me</h2>


      <div className="containter about__container">
        <div className="about__me">
          <DevStackVisual className="DevStackVisual"/>
          <div className="image">
            <img src="http://placehold.it/" alt ="" />
          </div>
        </div>


        <div className='about__content'>
          <div className="about__cards">


            <article className='about__card'>
              <FaAward className = "about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Software Engineering; plus college</small>
            </article>

            <article className='about__card'>
              <FaAward className = "about__icon"/>
              <h5>Node.JS & NPM Expert</h5>
              <small>Highly proficient</small>
            </article>

            <article className='about__card'>
              <FaAward className = "about__icon"/>
              <h5>Blockchain</h5>
              <small>Solidity, IPFS, & NFTs</small>
            </article>


          </div>


          <p>
            Professional Software Engineer services involving backend development, front-end development, 
            and Blockchain development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>
    
    </section>
  )
}

export default About