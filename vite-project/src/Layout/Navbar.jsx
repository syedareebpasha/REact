import React from 'react'
import logo from '../assets/logo.png'
import Button from '../Shared/Button'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Main-div'>
    <div><img className='logo' src={logo} alt="" /></div>
<div>
  <ul className='Nav-links'>
    <li><a href="">Home</a></li>
    <li><a href="">Top Destinations</a></li>
    <li><a href="">Latest Stories</a></li>
    <li><a href="">Trekker's Highlights</a></li>
    <li><a href="">Service</a></li>
  </ul>
</div>
<div className='btn'>
  <Button className="custom-button" text="Search" />
  </div>
    </div>
  )
}

export default Navbar
