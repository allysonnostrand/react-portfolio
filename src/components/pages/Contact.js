import React from 'react'

export default function Contact () {
  return (
  
  <div className='contactbox'>
    <div className='boxitems'>
      <h3 className='contacthead'>Please feel free to reach out!</h3>
        <form>
          <div className='col'>
            <label>Name: </label>
            <input type='input' required></input>
          </div>
          <div className='col'>
            <label>Email: </label>
            <input type='email' required></input>
          </div>
          <div className='col message'>
            <label>Message: </label>
            <textarea type='input' required></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
