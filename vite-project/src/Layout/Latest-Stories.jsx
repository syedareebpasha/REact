import React from 'react'
import './Latest-Stories.css'
import Button from '../Shared/Button'
import img from '../assets/latest-stories-img.png'
import img1 from '../assets/latest-img-1.png'
import img2 from '../assets/latest-img-2.png'
import img3 from '../assets/latest-img-3.png'

const LatestStories = () => {
    return (
        <div> 
            <div className='top-container'>
                <div><h1 className='heading'> Latest Stories</h1></div>
                <div className="view-all-button"><Button className="custom-button" text="View All Stories" /></div>
            </div>
            <div className="latest-stories-container"> 
                <div>
                    <div><img className="latest-stories-img" src={img} alt="Latest Stories" /></div>
                    <div className="latest-stories-text"> <div className="span1">Lorem ipsum, dolor sit amet consectetur adip <br />isicing elit. Commodi, harum.</div> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione deleniti magnam <br /> assumenda! Harum, a? </div>
                </div>
                <div className="latest-stories-container1">
                    <div className="latest-stories-container2">
                        <div><img className="latest-stories-img1" src={img1} alt="Latest Stories" /></div>
                 <div className="span1">Lorem ipsum, dolor sit amet consectetur adip <br />isicing elit. Commodi, harum.</div>
                    </div>
                     <div className="latest-stories-container2">
                        <div><img className="latest-stories-img1" src={img2} alt="Latest Stories" /></div>
                 <div className="span1">Lorem ipsum, dolor sit amet consectetur adip <br />isicing elit. Commodi, harum.</div>
                    </div>
                     <div className="latest-stories-container2">
                        <div><img className="latest-stories-img1" src={img3} alt="Latest Stories" /></div>
                 <div className="span1">Lorem ipsum, dolor sit amet consectetur adip <br />isicing elit. Commodi, harum.</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LatestStories
