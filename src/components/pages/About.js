import React from 'react'

export default function About () {
  return (
    <container className="containers">
      <img className= "bioImg" src={process.env.PUBLIC_URL+"/images/Portfolio-image-1.png"} alt='ally sitting in a chair'></img>
      <div className='abouttext'>
        <h2>About Me</h2>
        <p>Recent graduate of the University of Washington Coding Bootcamp looking to start a professional career in Web Development.
           Spent the past several years working in the customer service industry- building on soft skills inlcuding communication, accountability and adaptability.
           <br /><br />test</p>
      </div>
    </container>
        
  )
}
