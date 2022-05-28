import React from 'react'


import { BsCheck2Circle } from 'react-icons/bs'

const Backend = () => {
  return (
    <article className="service">
        <div className="service__head">
        <h3>Backend Engineering</h3>
        </div>

        <ul className="service__list">
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>API Creation</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Database Integration</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Product Deployment</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Backend->Frontend Integrations</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Data Manipulation</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Bug Fixing / Upgrades</p>
            </li>
        </ul>
    </article>
  )
}

export default Backend