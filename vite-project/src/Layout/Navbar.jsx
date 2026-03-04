import React from 'react'
import logo from '../assets/logo.png'
import Button from '../Shared/Button'
import './Navbar.css'
import search from '../assets/search.svg'
const Navbar = () => {
  return (
    <div className='Main-div'>
    <div><img className='logo' src={logo} alt="" /></div>
<div>
  <ul className='Nav-links'>
    <li className='nav'><a href="">Top Destinations</a></li>
    <li className='nav'><a href="">Latest Stories</a></li>
    <li className='nav'><a href="">Home</a></li>
    <li className='nav'><a href="">Trekker's Highlights</a></li>
    <li className='nav'><a href="">Service</a></li>
  </ul>
</div>
<div style={{ display:'flex', gap:'15px'}} className='btn'>
  <img style={{ width:'30px', height:'30px', marginTop:'10px' }} src={search} alt="Search" />
  <Button className="custom-button" text="Search" />
  </div>
    </div>
  )
}

export default Navbar
