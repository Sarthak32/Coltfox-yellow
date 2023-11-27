import React, { useEffect, useRef } from 'react';
import "./Page2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  

  return (
    <div className="page2-container">
      <div className="page2-rect">
        <div className="page2-right">
          <div className="weare">Who We Are</div>
          <div className="title">Our Brands</div>
          <div className="description">
          HUDBIL Private Limited is an  360 Degree Exclusive Co-creators. Passionate innovators. We’re your Design, Development and Marketing partners, working at the cutting edge of digital product development. We have the technical, marketing expertise and domain experience to help you push boundaries, regardless of your industry.
          </div>
        </div>
        <div className="comp-cards">
          <div className="comp-card-grp">
          <div className="comp-c1">
          <img src="hudbil-logo.png" alt="" />
          <p>HUDBIL delivers B2B engaging designing and development with latest technology tools to empower business and drive success, at speed and scale. </p>
          <button className="learnmore">Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} /></button>
          <div className="comp-line-design" ><img src='./line-design.png'/></div>
          </div>
          <div className="comp-c2">
          <img src="kalacode-logo.png" alt="" />
          <p>KALACODE delivers proprietary 3D workflows and are responsible for the world’s firsts in AR, including the world’s largest deployment of WebAR.</p>
          <button className="learnmore">Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} /></button>
          <div className="comp-line-design" ><img src='./line-design.png'/></div>
          </div>
          <div className="comp-c3">
          <img src="maus-logo.png" alt="" />
          <p>MAUS is a ‘Gen-Z’ Product that allows users to use their mobile phones as an exclusive mouse without wires and other connections. A user journey touch point.</p>
          <button className="learnmore">Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} /></button>
          <div className="comp-line-design" ><img src='./line-design.png'/></div>
          </div>
          </div>
          <div className="comp-card-grp">
          <div className="comp-c1">
          <img src="hudbil-logo.png" alt="" />
          <p>HUDBIL delivers B2B engaging designing and development with latest technology tools to empower business and drive success, at speed and scale. </p>
          <button className="learnmore">Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} /></button>
          <div className="comp-line-design" ><img src='./line-design.png'/></div>
          </div>
          <div className="comp-c2">
          <img src="kalacode-logo.png" alt="" />
          <p>KALACODE delivers proprietary 3D workflows and are responsible for the world’s firsts in AR, including the world’s largest deployment of WebAR.</p>
          <button className="learnmore">Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} /></button>
          <div className="comp-line-design" ><img src='./line-design.png'/></div>
          </div>
          <div className="comp-c3">
          <img src="maus-logo.png" alt="" />
          <p>MAUS is a ‘Gen-Z’ Product that allows users to use their mobile phones as an exclusive mouse without wires and other connections. A user journey touch point.</p>
          <button className="learnmore">Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} /></button>
          <div className="comp-line-design" ><img src='./line-design.png'/></div>
          </div>
          </div>
        </div>
      

      </div>
    </div>
  );
};

export default Page2;
