import React from 'react'
import './experience.scss'

import Frontend from './Frontend'
import Backend from './Backend'
import Blockchain from './Blockchain'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2 className="text-light">My Experience</h2>

      <div className="container experience__container">
        

        <Frontend />
        <Blockchain />
        <Backend />


      </div>
    </section>
  )
}

export default Experience