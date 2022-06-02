import React from 'react'

export default function About () {
  return (
    <container className="containers">
      <img className= "bioImg" src={process.env.PUBLIC_URL+"/images/Portfolio-image-1.png"} alt='ally sitting in a chair'></img>
      <div className='abouttext'>
        <h2>About Me</h2>
            <p> I am an aspiring front-end Web Developer, currently enrolled in the UW Coding Bootcamp.
            I love to create and work with others.
            I have experience working with HTML and CSS, and javaScript.</p>
      </div>
    </container>
        
  )
}
