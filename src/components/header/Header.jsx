import React from 'react'
import './header.scss'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

import { BiDownArrow } from 'react-icons/bi'

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5> <span>&#123;</span>  Blockchain <span>||</span> Backend <span>||</span> Frontend <span>&#125;</span></h5>
        <h1>Gavin Stanifer</h1>
        <h5 className="text-light">Software Engineer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down <BiDownArrow/><BiDownArrow/></a>

      </div>
    </header>
  )
}

export default Header