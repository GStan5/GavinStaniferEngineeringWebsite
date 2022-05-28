import React from 'react'


import PlaidBTCImage from '../../../assets/PlaidBTC.png'
import { FaReact } from 'react-icons/fa'

const PlaidBTC = () => {
  return (
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={PlaidBTCImage} alt="" />
        </div>
        <li>
        <FaReact className="portfolio__item-icon"/>
        <h3>Login, Sign-up, Plaid, BTC RPC</h3>
        </li>
        <div className="portfolio__item-cta">
            <a href="https://github.com/GStan5/Plaid-btcRPC" className="btn btn-primary" target="_blank">Github</a>
            {/* <a href="https://mint.towersofbabel.xyz/" className="btn btn-primary" target="_blank">Project</a> */}
        </div>
    </article>
  )
}

export default PlaidBTC