import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import facebook from '../assets/facebooklogo.png'
import twitter from '../assets/twitterlogo.png'
import instagram from '../assets/instagramlogo.png'
import linkedin from '../assets/linkedinlogo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div>  
       <div style={{  display:'flex', flexDirection:'column'  }}>
         <img src={logo} alt="Logo" className="footer-logo" />
         <h6 style={{  marginTop:'-10px', marginLeft:'10px', fontSize:'15px', fontWeight:'bold'  }}>Beyond Mile's</h6>
       </div>
        
{/* <div>Font awesome</div> */}
      </div>
     <div className='footer-links' > 
        <li><a href="">Home</a></li>
    <li><a href="">Top Destinations</a></li>
    <li><a href="">Latest Stories</a></li>
    <li><a href="">Trekker's Highlights</a></li>
    <li><a href="">Service</a></li></div>
    <div> <p style={{marginLeft:'35px', fontWeight:'bold', fontSize:'20px'}}>Follow Us On </p>
<div className='social-icons'>
  <img src={facebook} alt="Facebook" className="social-icon1" />
  <img src={twitter} alt="Twitter" className="social-icon" />
  <img src={instagram} alt="Instagram" className="social-icon1" />
  <img src={linkedin} alt="LinkedIn" className="social-icon" />
</div>
    </div>
          </div>
  )
}

export default Footer
