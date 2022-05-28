import React from 'react'

import { SiCheckio } from 'react-icons/si'

const Frontend = () => {
  return (
    <div className="experience__frontend">
    <h3>Frontend Development</h3>
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
            <h4>REACT</h4>
            <small className='text-light'>Intermediate</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>HTLM</h4>
            <small className='text-light'>Intermediate</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>UNITY</h4>
            <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience__details'>
        <SiCheckio className='experience__details-icon'/>
        <div>
            <h4>WEGBGL</h4>
            <small className='text-light'>Intermediate</small>
        </div>
      </article>
    </div>
  </div>
  )
}

export default Frontend