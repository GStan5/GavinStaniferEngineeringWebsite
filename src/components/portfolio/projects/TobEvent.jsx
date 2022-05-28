import React from 'react'


import TobEventImage from '../../../assets/TobEvent.png'
import { FaUnity } from 'react-icons/fa'

const TobEvent = () => {
  return (
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={TobEventImage} alt="" />
        </div>
        <li>
          <FaUnity className="portfolio__item-icon"/>
          <h3>Towes of Babel NFT Game</h3>
        </li>
        <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="btn" target="_blank">Github</a> */}
            <a href="https://eventtob.herokuapp.com/" className="btn btn-primary" target="_blank">Project</a>
        </div>
    </article>
  )
}

export default TobEvent