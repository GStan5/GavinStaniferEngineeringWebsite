import React from 'react'


import { BsCheck2Circle } from 'react-icons/bs'

const Blockchain = () => {
  return (
    <article className="service">
        <div className="service__head">
        <h3>Blockchain Engineering</h3>
        </div>

        <ul className="service__list">
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Smart Contract Creation</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Minting Page Creation</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>NFT Creation</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>IPFS</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>NFT API Creation & configuration</p>
            </li>
            <li>
                <BsCheck2Circle className='service__list-icon'/>
                <p>Web3 Integration</p>
            </li>
        </ul>
    </article>
  )
}

export default Blockchain