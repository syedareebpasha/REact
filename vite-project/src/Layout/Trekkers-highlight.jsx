import React from 'react'
import './Trekkers-highlight.css'
import commentimg from '../assets/comment-img.png'
import trekkinging1 from '../assets/trekking-img-1.png'
import trekkingvideo from '../assets/video.mp4'
import Button from '../Shared/Button'

const Trekkershighlight = () => {
    return (
        <div style={{ marginTop: '70px' }}>
            <h1 className="trekkers-highlight-heading">Trekkers Highlight</h1>
            <div>
                <div className='trekkers-highlight-container1'>
                    <div className='trekkers-highlight-comment'>
                       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <div>
                            <img style={{  marginLeft:'20px'  }} src={commentimg} className='comment-img' alt="" />
                        </div>
                        <div style={{ fontWeight: 'bold' }}>
                            Maria Angilica
                        </div>
                        </div>
                        <div>
                        <div style={{ lineHeight: '1.6', marginLeft: '30px' }}>
                        <span>Lorem ipsum dolor sit amet <br /></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla est a ullam voluptatibus inventore? Tempora <br /> in autem, ipsa eos nobis consectetur officia esse <br /> laudantium fuga odit ut rem eveniet amet pariatur dicta <br /> magnam temporibus sapiente. Laudantium fugit quos at <br /> saepe animi rem error nulla deleniti culpa ad, c <br /> onsequuntur, ab tempore.
                    </div>
                    </div>
                    </div>
                    
                    <div className='trekkers-highlight-container2'>
                        <div>
                            <img className='trekking-img-1' src={trekkinging1} alt="" />
                            </div>
                        <div>
                            <video
                           src={trekkingvideo}
                           autoPlay 
                            muted 
                            loop
                            className='trekking-video'>
                                Your browser does not support the video tag.
                            </video> <br /> 
                            <div className='' style={{ marginTop: '-60px', lineHeight: '1.6',  }}>
                            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Dolor, sapiente.
                          <div style={{ marginTop:'20px', marginLeft:'130px'  }}>  <Button className="custom-button" text="View More" /></div>
                           </div>
                            </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Trekkershighlight
