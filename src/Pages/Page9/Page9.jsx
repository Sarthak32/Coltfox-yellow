import React from 'react';
import './Page9.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Page9 = () => {
  return (
    <div className="page9-container">
      <div className="title-page9">what we did</div>

      <div className="page9-content">
      <button className="page9-slider" >
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f32525", fontSize: "2rem" }} />
        </button>
        <div className="page9-cont1" style={{ backgroundImage: "url('./readrect1.png')" }}>
          
        </div>
        <div className="page9-cont2" style={{ backgroundImage: "url('./readrect2.png')" }}>
          
        </div>
        <div className="page9-cont3" style={{ backgroundImage: "url('./readrect1.png')" }}>
          
        </div>
        <div className="page9-cont4" style={{ backgroundImage: "url('./readrect2.png')" }}>
          
        </div>
      </div>
    </div>
  );
};

export default Page9;
