import React,{useRef} from 'react';
import './Page7.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll } from "framer-motion";

const Page7 = () => {
 return(
    <div className="page7-container">
        <button className='whatwefocus-btn'>What We Focus</button>
        <div className="page7-title">Industries</div>
        <div className="page7-des">Regardless of your operation’s size, collaboration toward a shared goal leads to success. </div>
        <div className="page7-content">
            <div className="section">
                <div className="section-title">FRANCHISES</div>
                <div className="page7-line"/>
                <div className="sec-logo"><img src="./sec1-logo.png" alt="" /></div>
                <div className="sec-des1">Not only do we increase B2B leads for franchisors, we also help home-town franchisees generate new customers and increase customer loyalty.</div>
                <div className='learn-m'>Learn more<img src="./arr-b.png" alt="" /></div>
            </div>
            <div className="section-mid">
                <div className="section-title">NON-PROFITS</div>
                <div className="page7-line"/>
                <div className="sec-logo"><img src="./sec2-logo.png" alt="" /></div>
                <div className="sec-des2">Empowering non-profit organizations to increase engagement, loyalty, impact, and donations worldwide is our majar focus. </div>
                <div className='learn-m'>Learn more<img src="./arr-b.png" alt="" /></div>
            </div>
            <div className="section">
                <div className="section-title">E-COMMERCE</div>
                <div className="page7-line"/>
                <div className="sec-logo"><img src="./sec3-logo.png" alt="" /></div>
                <div className="sec-des3">We boost online retailers' digital presence, optimize conversion rates, and enhance the customer shopping experience for increased sales and profitability.</div>
                <div className='learn-m'>Learn more<img src="./arr-b.png" alt="" /></div>
            </div>
        </div>



    </div>
 )
};

export default Page7;
