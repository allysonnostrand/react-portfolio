import React from 'react'
import './style.css'
import { HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {
  return (
    <nav>
      <Link to="/"><h1 className='logo'>Ally Nostrand</h1></Link> 
        <ul>  
          <Link to="#aboutMe">
            <li>About</li>
          </Link>
          <Link to="#contact">
            <li>Contact</li>
          </Link>
          <Link to="#projects"> 
            <li>Projects</li>
          </Link> 
  {/* uncomment resume when your resume is ready to place here, use google drive link he, well I dont 
  recommend you to do this, privacy break.
   */}
          {/* <Link to="">
            <li>Resume</li>
          </Link> */}
        </ul>
    </nav>
  )
}

export default Navbar