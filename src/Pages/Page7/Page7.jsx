import React,{useRef} from 'react';
import './Page7.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll } from "framer-motion";

const Page7 = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="page7-container">
      <div className="title-page7">Clients</div>
      <div className="page7-content">
      <div className="subtitle-page7">
      CLIENTS WE'VE TURNED INTO
       LONG-TERM PARTNERS
     </div>
        <div className='clients'>
          <div className='client1'>
          <div className="img1">
            <img src='./SkyUpAirlineslogo.png' />
            </div>
            <div className="client-det">
             <img src="./skyup.png" alt="" />
             <button className="client-arrbtn" >
                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#FCF8F6", fontSize: "1rem" }} />
              </button>
            </div>
          </div>
          <div className='client2'>
          <div className="img1">
            <img src='./HLClogo.png' />
            </div>
            <div className="client-det">
             <img src="./HLC.png" alt="" style={{width:"60px"}}/>
             <button className="client-arrbtn" >
                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#FCF8F6", fontSize: "1rem" }} />
              </button>
            </div>
          </div>
          <div className="client3">
          <div className="img1">
            <img src='./Traxlogo.png' />
            </div>
            <div className="client-det">
             <img src="./Trax.png" alt="" style={{width:"80px"}} />
             <button className="client-arrbtn" >
                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#FCF8F6", fontSize: "1rem" }} />
              </button>
            </div>
          </div>
          <div className="client4">
          <div className="img1">
            <img src='./SkyUpAirlineslogo.png' />
            </div>
            <div className="client-det">
             <img src="./skyup.png" alt="" />
             <button className="client-arrbtn" >
                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#FCF8F6", fontSize: "1rem" }} />
              </button>
            </div>
          </div>
          <div className="client5">
            <div className="img1">
            <img src='./HLClogo.png' />
            </div>
            <div className="client-det">
             <img src="./HLC.png" alt="" style={{width:"60px"}}/>
             <button className="client-arrbtn" >
                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#FCF8F6", fontSize: "1rem" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
        
      
      
    </div>
  );
};

export default Page7;
