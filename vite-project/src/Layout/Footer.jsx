import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div>  
       <div>
         <img src={logo} alt="Logo" className="footer-logo" />
       </div>
        
{/* <div>Font awesome</div> */}
      </div>
     <div className='footer-links' > 
        <li><a href="">Home</a></li>
    <li><a href="">Top Destinations</a></li>
    <li><a href="">Latest Stories</a></li>
    <li><a href="">Trekker's Highlights</a></li>
    <li><a href="">Service</a></li></div>
    <div>Follow Us On</div>
          </div>
  )
}

export default Footer
