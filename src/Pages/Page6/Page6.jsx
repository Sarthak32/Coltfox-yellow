import React from 'react';
import './Page6.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Page6 = () => {
  return (
    <div className="page6-container">
      <div className="title-page6">what we did</div>

      <div className="page6-content">
      <button className="page6-slider" >
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f32525", fontSize: "2rem" }} />
        </button>
        <div className="cont1" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
        <div className="cont2" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
        <div className="cont3" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
        <div className="cont4" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
