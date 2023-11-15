import React,{useState,useRef} from 'react';
import './Page9.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Page9 = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  return (
    <div className="page9-container">
      <div className="title-page9">what we read</div>
      <button className="page9-slider" onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }} >
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f32525", fontSize: "2rem" }} />
        </button>
      <div className="page9-content" ref={elementRef}>
      
        <div className="page9-cont1" style={{ backgroundImage: "url('./readrect1.png')" }}>
          
        </div>
        <div className="page9-cont2" style={{ backgroundImage: "url('./readrect2.png')" }}>
          
        </div>
        <div className="page9-cont3" style={{ backgroundImage: "url('./readrect1.png')" }}>
          
        </div>
        <div className="page9-cont4" style={{ backgroundImage: "url('./readrect2.png')" }}>
          
        </div>
        <div className="page9-cont5" style={{ backgroundImage: "url('./readrect1.png')" }}>
          
        </div>
        <div className="page9-cont6" style={{ backgroundImage: "url('./readrect1.png')" }}>
          
        </div>
        <div className="page9-cont7" style={{ backgroundImage: "url('./readrect1.png')" }}>
          
        </div>
      </div>
    </div>
  );
};

export default Page9;
