import React from 'react'

import { SiCheckio } from 'react-icons/si'

const Backend = () => {
  return (
    <div className="experience__backend">
    <h3>Backend Development</h3>
    <div className="experience__content">

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>NODE.JS</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>EXPRESS</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>JSON</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>RESTAPI</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>MONGODB</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

    </div>
  </div>
  )
}

export default Backend