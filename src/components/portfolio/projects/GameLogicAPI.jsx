import React from 'react'


import GameLogicAPIImage from '../../../assets/GameLogicAPI.png'
import { FaNodeJs } from 'react-icons/fa'

const GameLogicAPI = () => {
  return (
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={GameLogicAPIImage} alt="" />
        </div>
        <li>
        <FaNodeJs className="portfolio__item-icon"/>
        <h3>Express RestAPI w/ Game Logic</h3>
        </li>
        <div className="portfolio__item-cta">
            <a href="https://github.com/GStan5/GameLogicAPI/tree/master" className="btn btn-primary" target="_blank">Github</a>
            {/* <a href="https://mint.towersofbabel.xyz/" className="btn btn-primary" target="_blank">Project</a> */}
        </div>
    </article>
  )
}

export default GameLogicAPI