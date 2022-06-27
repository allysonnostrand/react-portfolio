import React from 'react'

export default function Resume() {
  return (
    <div className='resumebox'>
      <div className='boxwidth'>
        <h2 className='prof'>Proficiencies</h2>
          <div className='resumeskills'>
            <ul className='skilllist'>
              <li>-HTML</li>
              <li>-CSS</li>
              <li>-JavaScript</li>
              <li>-Mysql</li>
              <li>-MongoDB</li>
              <li>-Handlebars</li>
              <li>-React</li>
            </ul>
          </div>
        <h3 className='resumelink'><a href='https://docs.google.com/document/d/1Fm29E6_Qp1CNowITDCihyqPDRAMC2uRX7rqqRj8Ir00/edit?usp=sharing' target="_blank" rel='noreferrer noopener'> &#10024; Download my resume here &#10024;</a></h3>
      </div>
    </div>
  )
}
