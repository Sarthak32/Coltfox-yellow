import React,{useRef} from 'react';
import './Page8.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll } from "framer-motion";

const Page8 = () => {
   


 return(
    <div className="page8-container">
      <button className='whattheysay-btn'>What They Say</button>
      <div className="page8-title">Clients</div>
      <div className="page8-des">We’ve partnered with some truly amazing brands and organizations – locally, nationally, and internationally.</div>
         
      <div className='page8-scroller1' >
         <div className="scroll1-grp1">
         <div className='elem1'><img src='./Airbnblogo.png' alt='Airbnb logo' /></div>
         <div className='elem1'><img src='./uberlogo.png' alt='Uber logo' /></div>
         <div className='elem1'><img src='./microsoftlogo.png' alt='Microsoft logo' /></div>
         </div>
         <div className="scroll1-grp1">
         <div className='elem1'><img src='./Airbnblogo.png' alt='Airbnb logo' /></div>
         <div className='elem1'><img src='./uberlogo.png' alt='Uber logo' /></div>
         <div className='elem1'><img src='./microsoftlogo.png' alt='Microsoft logo' /></div>
         </div>
                 
      </div>
      
      <div className='page8-scroller2'>
         <div className="scroll2-grp1">
         <div className='elem2'><img src='./Airbnblogo.png' alt='Airbnb logo' /></div>
         <div className='elem2'><img src='./uberlogo.png' alt='Uber logo' /></div>
         <div className='elem2'><img src='./microsoftlogo.png' alt='Microsoft logo' /></div>
         </div>
         <div className="scroll2-grp1">
         <div className='elem2'><img src='./Airbnblogo.png' alt='Airbnb logo' /></div>
         <div className='elem2'><img src='./uberlogo.png' alt='Uber logo' /></div>
         <div className='elem2'><img src='./microsoftlogo.png' alt='Microsoft logo' /></div>
         </div>
      </div>
    </div>
 )
};

export default Page8;
