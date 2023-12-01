import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCopyright } from '@fortawesome/free-solid-svg-icons';
import "./Page10.css"


const Page10 = () => {
    return(
        <div className="page10-container">
            <button className='whatweread-btn'>What We Read</button>
            <div className="page10-title">Our Blogs</div>
            <div className="page10-subtitle">Be inspired and informed. <button className='ournews-btn'>Our News<img src='./arr-b.png'/> </button></div>
            <div className='page10-line'/>

            <div className="page10-cont">
                <div className="page10-blog1">
                    <img src='./blog1.png' className='blogimg'/>
                    <div className='expand-blog'>
                        <div className="expand-content">
                            <img src="./page10-insideimg.png" alt="" />
                            <img  className ="blog-arr" src='./page10-arrw.png' alt='' />
                        </div>
                    </div>
                    <div className="blog-des"><div className="para">First - party data in marketing - what you need to know ?</div>
                    <div className="gotoblog-btn"><img src='./crossarrimg.png'/></div></div>
                    <div className="blog-btn">DATA AND ANALYTICS</div>
                </div>
                <div className="page10-blog2">
                    <img src='./blog2.png' className='blogimg'/>
                    <div className='expand-blog'>
                        <div className="expand-content">
                            <img src="./page10-insideimg.png" alt="" />
                            <img className ="blog-arr" src='./page10-arrw.png' alt='' />
                        </div>
                    </div>
                    <div className="blog-des"><div className="para">The power of performance creative in modern marketing</div>
                    <div className="gotoblog-btn"><img src='./crossarrimg.png'/></div></div>
                    <div className="blog-btn" style={{width:"310px"}}>STRAREGY AND CREATIVE</div>
                </div>
            </div>
        </div>
     )
    
}

export default Page10