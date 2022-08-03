import React from 'react'
import './style.css'
// import { FaGithub, FaRocket } from 'react-icons/fa'

const Project = (props) => {

  return (
      <div className='card' style={{backgroundImage: `url(${process.env.PUBLIC_URL + props.image})`,backgroundSize: 'cover'}}>
        <div className='text'>
          <h3>{props.title}</h3>
          <div className='project-links'>
            <a href={props.deployed} target="_blank" rel='noreferrer noopener'>Deployed
            </a>
            <a href={props.repo} target="_blank" rel='noreferrer noopener'>Repo
            </a>
          </div>
        </div>
      </div>
  )
}

export default Project