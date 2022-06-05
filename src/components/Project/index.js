import React from 'react'
import './style.css'


const Project = (props) => {

  return (
      <div className='card' style={{backgroundImage: `url(${process.env.PUBLIC_URL + props.image})`,backgroundSize: 'cover'}}>
        <div className='text'>
          <h2>{props.title}</h2>
          <a href={props.deployed} target="_blank" rel='noreferrer noopener'>Deployed
          </a>
          <a href={props.repo} target="_blank" rel='noreferrer noopener'>Repo
          </a>
        </div>
      </div>
      

  )
}

export default Project