import React from 'react'
import './nav.scss'
import { useState } from 'react'

import { RiHome3Line, RiBook3Line, RiContactsBook2Line } from 'react-icons/ri'
import { FaUserTie, FaHandshake } from 'react-icons/fa'

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");


  return (
    <nav>

      <a href="#"               onClick={() => setActiveNav("#")} 
      className={activeNav === '#' ? 'active' : ""}> <RiHome3Line/></a>

      <a href="#about"          onClick={() => setActiveNav("#about")} 
      className={activeNav === '#about' ? 'active' : ""}><FaUserTie/></a>

      <a href="#experience"     onClick={() => setActiveNav("#experience")} 
      className={activeNav === '#experience' ? 'active' : ""}><RiBook3Line/></a>

      <a href="#services"       onClick={() => setActiveNav("#services")} 
      className={activeNav === '#services' ? 'active' : ""}><FaHandshake/></a>

      <a href="#contact"        onClick={() => setActiveNav("#contact")}
      className={activeNav === '#about' ? 'contact' : ""}><RiContactsBook2Line/></a>

    </nav>
  )
}

export default Nav