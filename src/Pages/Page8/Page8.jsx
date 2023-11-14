import React,{useRef} from 'react';
import './Page8.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll } from "framer-motion";

const Page8 = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="page8-container">
     
      <div className="title-page8">Its all about our clients. </div>
      <div className="subtitle-page8">
      (and what they say!)
     </div>

      <div className="page8-right">
        <div className="page8-arrbtn">
          <img src='./arrowbtnpage8.png'/>
        </div>
        <div className='clients-review'>
          <div className='comp1'>
          <div className="comp-name">Company name</div>
          <div className="random" style={{ fontFamily:"Poppins, sans-serif" , fontSize:"66.77px",color:"rgba(255, 255, 255, 1)"}}>’’</div>
          <div className="comp-review">
            Le persone sempre al centro. Sono la fonte principale di ogni grande progetto. Collaborano, crescono, si uniscono all’unisono per creare un unico e potente movimento: la nostra onda.
          </div>
          </div>
          
          
        </div>
      </div>
        
      
      
    </div>
  );
};

export default Page8;
