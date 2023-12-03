import React from 'react'
import "./Ourservicesmain.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Ourservicesmain = () => {
  return (
    <div className='Ourservicesmain'>
        <div className="Ourservicesmain-title">Where Coltfox ideas deliver a genuinely memorable brand experience.</div>
        <div className="Ourservicesmain-page2">
            <div className="Ourservicesmain-page2-title">PIONEERING</div>
            <div className="Ourservicesmain-page2-des">THE FUTURE OF MARKETING</div>
        </div>
        <div className="Ourservicesmain-page3">
            <div className='services-types'>
                <div className="types-srno">01</div>
                <div className="types-exp">
                    <div className="service-title">Performance Marketing</div>
                    <div className="service-des">Digital marketing is in a constant state of motion. We continuously explore new strategies, tactics, and technologies to optimize your campaigns.</div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className='ser-arr' />
            </div>
            <div className="black-line-ser"/>
            <div className='services-types'>
                <div className="types-srno">02</div>
                <div className="types-exp">
                    <div className="service-title">Omni-channel Marketing</div>
                    <div className="service-des">Using a multi-channel approach, we provide a seamless and integrated experience to reach and engage your customers through various touchpoints.</div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className='ser-arr' />
            </div>
            <div className="black-line-ser"/>
            <div className='services-types'>
                <div className="types-srno">03</div>
                <div className="types-exp">
                    <div className="service-title">Lead Generation</div>
                    <div className="service-des">GIANT campaigns marry the medium, message, and audience to generate more leads, increasing conversions and revenues.</div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className='ser-arr' />
            </div>
            <div className="black-line-ser"/>
            <div className='services-types'>
                <div className="types-srno">04</div>
                <div className="types-exp">
                    <div className="service-title">Content Marketing</div>
                    <div className="service-des">Our COPE strategy ensures a consistent brand message and image across platforms to strengthen brand recognition and reach a broader audience.</div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className='ser-arr' />
            </div>
            <div className="black-line-ser"/>
        </div>
        <div className="Ourservicesmain-page4">
            <div className="ourwork-btn">OUR WORK</div>
            <div className="featproj-btn">FEATURED PROJECTS<img src='./arr-b.png'/></div>
            <div className="Ourservicesmain-page4-title">GIANT Reflections: Our First Canadian Marketing Award Win!</div>
            <div className="Ourservicesmain-page4-cont">
                <div className="serv-cont">
                    <img src='./serv-contimg1.png'/>
                    <div className="serv-cont-title">Promoting Gender Equity in the Franchise</div>
                    <div className="serv-cont-des">McDonald’s Restaurants of Canada Limited owns and operates more than 1,400
restaurants and employs more than 90,000 Canadians coast-to-coast, serving</div>
                    <div className="viewcase-btn">View Case Study<img src='./arr-b.png'/></div>
                    
                </div>
                <div className="serv-cont">
                    <img src='./serv-contimg2.png'/>
                    <div className="serv-cont-title">Optimizing Content and Reaching Diverse</div>
                    <div className="serv-cont-des">The YMCA grappled with a decline in membership during the challenging Covid-19
pandemic. Their previous efforts, involving multiple agencies, resulted</div>
                    <div className="viewcase-btn">View Case Study<img src='./arr-b.png'/></div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Ourservicesmain