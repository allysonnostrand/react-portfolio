import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h1>Ally Nostrand</h1>
        <ul>  
          <NavLink to="/about">
            <li>About Me</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/portfolio"> 
            <li>Portfolio</li>
          </NavLink> 
          <NavLink to="/resume">
            <li>Resume</li>
          </NavLink>
        </ul>
    </nav>
  )
}

export default Navbar