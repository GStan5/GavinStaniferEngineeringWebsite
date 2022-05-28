import React from 'react'


import { BsCheck2Circle } from 'react-icons/bs'

const Frontend = () => {
  return (
    <article className="service">
        <div className="service__head">
        <h3>Frontend Engineering</h3>
        </div>

        <ul className="service__list">
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>UI/UX Creation</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>NPM Integrations</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>HTML & CSS Design</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Form Data Collecting</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Responsive Pages</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Bug Fixing / Upgrades</p>
            </li>
        </ul>
    </article>
  )
}

export default Frontend