import React from 'react'


import { BsTwitter, BsGithub, BsSpotify } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/GStan5" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/GavinStanifer" target="_blank"><BsTwitter/></a>
        <a href="https://open.spotify.com/playlist/32hJXySZtt9YvnwcYINGZ0?si=8c7559621edf4772" target="_blank"><BsSpotify/></a>
    </div>
  )
}

export default HeaderSocials