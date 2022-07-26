import React from 'react'
import './style.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav>
      <h1 className='logo'>Ally Nostrand</h1>
        <ul>  
          <Link to="#aboutMe">
            <li>About</li>
          </Link>
          <Link to="#contact">
            <li>Contact</li>
          </Link>
          <Link to="#projects"> 
            <li>Portfolio</li>
          </Link> 
          <Link to="">
            <li>Resume</li>
          </Link>
        </ul>
    </nav>
  )
}

export default Navbar