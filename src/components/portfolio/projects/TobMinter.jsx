import React from 'react'


import TobMinterImage from '../../../assets/TobMinter.png'
import { FaReact } from 'react-icons/fa'

const ToBMinter = () => {
  return (
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={TobMinterImage} alt="" />
        </div>
        <li>
          <FaReact className="portfolio__item-icon"/>
          <h3>ERC-721 NFT Minter</h3>
        </li>
        <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="btn" target="_blank">Github</a> */}
            <a href="https://mint.towersofbabel.xyz/" className="btn btn-primary" target="_blank">Project</a>
        </div>
    </article>
  )
}

export default ToBMinter