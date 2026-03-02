import React from 'react'
import './Form.css'
import Button from '../Shared/Button'

const Form = () => {
  return (
    <div className='form-container'>
      <div className="heading-container">
      <h1 className='heading'>Get Your Travel Inspiration <br /> Straight to Your Inbox</h1>
    </div>
    <div className='form-content'>
      <input type="text" placeholder='Search Your Dream Place' /> <Button className="custom-button" text="Subscribe" />
      </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nesciunt facilis esse odit illo atque .</p>
    
    </div>

)
}

export default Form
