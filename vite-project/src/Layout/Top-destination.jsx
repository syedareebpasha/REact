import React from 'react'
import './Top-destination.css'
import Button from '../Shared/Button'
import city1 from '../assets/city-1.png'
import city2 from '../assets/city-2.png'
import city3 from '../assets/city-3.png'
import city4 from '../assets/city-4.png'




function TopDestination() {
    return (
        <div>
            <h1 className='heading'>TOP DESTINATIONS</h1>
            <div className='top-destination-container'>
                <div className='city-names'>
                    <a href="">Paris</a>
                    <a href="">London</a>
                    <a href="">Tokyo</a>
                    <a href="">New York</a>
                    <a href="">Sydney</a>
                    <a href="">Rome</a>
                    <a href="">Dubai</a>
                    <a href="">USA</a>
                    <a href="">Europe</a>
                    <a href="">Canada</a>
                    <a href="">Japan</a>
                    <a href="">China</a>
                    <a href="">Russia</a>
                </div>
                <div className='view-all-button-container'>
                    <Button text="View All Destinations" className="custom-button" />
                </div>
            </div>
            <div className="large-container">
                <div>
                    <div>
                        <img className='img' src={city1} alt="City 1" />
                    </div>
                    <div>
                        <h5><span>TOKYO</span> <br />Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Hic, itaque.</h5>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={city2} className='img' alt="City 3" />
                    </div>
                    <div>
                        <h5><span>DUBAI</span> <br />Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Hic, itaque.</h5>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={city3} className='img' alt="City 2" />
                    </div>
                    <div>
                        <h5><span>PARIS</span> <br />Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Hic, itaque.</h5>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={city4} className='img' alt="City 1" />
                    </div>
                    <div>
                        <h5><span>USA</span> <br />Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Hic, itaque.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDestination
