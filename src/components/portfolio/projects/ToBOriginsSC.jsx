import React from 'react'


import ToBOriginsSCImage from '../../../assets/ToBOriginsSC.png'
import { FaEthereum } from 'react-icons/fa'

const ToBOriginsSC = () => {
  return (
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={ToBOriginsSCImage} alt="" />
        </div>
        <li>
        <FaEthereum className="portfolio__item-icon"/>
        <h3>ERC-721 Smart Contract</h3>
        </li>
        <div className="portfolio__item-cta">
            {/* <a href="https://github.com/GStan5/GameLogicAPI/tree/master" className="btn btn-primary" target="_blank">Github</a> */}
            <a href="https://etherscan.io/address/0x6122540887c3268a464fcada73ea6b6b941a2a32#code" className="btn btn-primary" target="_blank">Etherscan</a>
        </div>
    </article>
  )
}

export default ToBOriginsSC