import React from 'react'


import TobWebsiteImage from '../../../assets/TobWebsite.png'
import { FaWordpressSimple } from 'react-icons/fa'

const TobWebsite = () => {
  return (
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={TobWebsiteImage} alt="" />
        </div>
        <li>
          <FaWordpressSimple className="portfolio__item-icon"/>
          <h3>ToB Website</h3>
        </li>
        <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="btn" target="_blank">Github</a> */}
            <a href="https://towersofbabel.xyz/" className="btn btn-primary" target="_blank">Project</a>
        </div>
    </article>
  )
}

export default TobWebsite