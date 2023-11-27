import React ,{useRef,useState,useEffect }from 'react';
import './Page3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation,useScroll } from 'framer-motion';

const Page3 = () => {
  




  return (
    <div className='page3-container'>
      <div className='section-heading'>Our values define our culture and drive what we do.</div>
      <div className="page3-right">
        <div className="aboutus">About Us</div>
        <div className="stable-des">Coltfox is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent.</div>
        <div className="movable-des">
          <div className="movable1">Our tenacious team of proven digital marketing experts and business growth pros push the boundaries of what is possible. GIANT harnesses the power of data analytics to understand customer behaviours and preferences.</div>

        </div>
        <div className="line-design" ><img src='./line-design.png'/></div>

        <div className="findmore-btn">Find out more<img src='./arr-w.png'/></div>


      </div>

      

     
       </div>
  );
};

export default Page3;
