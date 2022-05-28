import React from 'react'
import './footer.scss'


import { BsTwitter, BsGithub, BsSpotify } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Gavin Stanifer Engineering</a>

      {/* <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}

      <div className="footer__socials">
        <a href="https://github.com/GStan5" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/GavinStanifer" target="_blank"><BsTwitter/></a>
        <a href="https://open.spotify.com/playlist/32hJXySZtt9YvnwcYINGZ0?si=8c7559621edf4772" target="_blank"><BsSpotify/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; GSE. All rights reserved</small>
      </div>
  
    </footer>
  )
}

export default Footer