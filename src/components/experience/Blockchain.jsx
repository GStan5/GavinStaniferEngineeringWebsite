import React from 'react'

import { SiCheckio } from 'react-icons/si'

const Blockchain = () => {
  return (
    <div className="experience__blockchain">
    <h3>Blockchain Development</h3>
    <div className="experience__content">

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>SOLIDTY</h4>
            <small className='text-light'>Intermediate</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>NFTs</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>METAMASK</h4>
            <small className='text-light'>Intermediate</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>TRUFFLE</h4>
            <small className='text-light'>Intermediate</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>IPFS</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>EC2</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

    </div>
  </div>
  )
}

export default Blockchain