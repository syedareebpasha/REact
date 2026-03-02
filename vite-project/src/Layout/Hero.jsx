import React from 'react'
import './Hero.css'
import Button from '../Shared/Button'
import img1 from '../assets/hero-1.png'
import img2 from '../assets/hero-2.png'
import img3 from '../assets/hero-3.png'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">DISCOVER THE <br />
        WORLD'S HIDDEN <br />
        WONDERS </h1>
        <p className="hero-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Aut perferendis cupiditate non provident <br /> iusto quis ipsam, eius asperiores facilis, commodi <br /> voluptatum, ipsa quia quod quisquam officia nesciunt <br /> autem. Dolores suscipit placeat recusandae impedit <br /> Optio fugiat similique aspernatur ex corporis </p>
<div className="btn-container"> <Button className="custom-button" text="Explore Now" /></div>
      </div>
      <div className="hero-images">
        <div><img className="hero-img-1" src={img1} alt="Hero 1" /></div>
        <div className="hero-img-2-3">
            <div><img className="hero-img-2" src={img2} alt="Hero 2" /></div>
            <div><img className="hero-img-3" src={img3} alt="Hero 3" /></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
