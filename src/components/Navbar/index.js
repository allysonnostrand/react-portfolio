import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
          <Link to="/about">
            <li>About Me</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/portfolio"> 
            <li>Portfolio</li>
          </Link> 
          <Link to="/resume">
            <li>Resume</li>
          </Link>
        </ul>
    </nav>
  )
}

export default Navbar