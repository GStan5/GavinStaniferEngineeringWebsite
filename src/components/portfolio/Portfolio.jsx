import React from 'react'
import './portfolio.scss'


import TobWebsite from './projects/TobWebsite'
import ToBMinter from './projects/TobMinter'
import ToBEvent from './projects/TobEvent'
import PlaidBTC from './projects/PlaidBTC'
import GameLogicAPI from './projects/GameLogicAPI'
import ToBOriginsSC from './projects/ToBOriginsSC'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projects I Worked On</h5>
      <h2 className="text-light">Portfolio</h2>

      <div className="container portfolio__container">

        <TobWebsite />
        <ToBMinter />
        <ToBEvent />
        <PlaidBTC />
        <GameLogicAPI />
        <ToBOriginsSC />

      </div>

    </section>
  )
}

export default Portfolio