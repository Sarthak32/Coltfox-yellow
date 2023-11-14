import React, { useEffect, useRef } from 'react';
import "./Page2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const graphRefs = useRef([]);

  useEffect(() => {
    graphRefs.current.forEach((graph, index) => {
      gsap.from(graph, {
        y: '90%',
        opacity: 0.6,
        scrollTrigger: {
          trigger: graph,
          start: 'top bottom-=400',
          end: 'top top',
          scrub: true,
        },
      });

      const speed = parseFloat(graph.getAttribute("data-speed")) || 1;

      gsap.to(graph, {
        scrollTrigger: {
          trigger: graph,
          start: 'top bottom-=100',
          end: 'top top',
          scrub: 1,
        },
        y: -20 * speed,
        zIndex: index,
      });
    });
  }, []);

  return (
    <div className="page2-container">
      <div className="title">Innovation at <br />your fingertips</div>
      <div className="description">
        Hudbil is a global creative Agency. We use design, animation, and technology to tell <br /> transformational stories for the world’s leading organizations.
      </div>

      <div className="graphs">
        <div className="graph" ref={(el) => (graphRefs.current[0] = el)} data-speed="5.2">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '60px' }} />
          <div className="graph-name">Strategy</div>
        </div>
        <div className="graph" ref={(el) => (graphRefs.current[1] = el)} data-speed="0.6">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(45deg)', height: '60px' }} />
          <div className="graph-name">Build</div>
        </div>
        <div className="graph" ref={(el) => (graphRefs.current[2] = el)} data-speed="3.4">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(-45deg)', height: '60px' }} />
          <div className="graph-name">Design</div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
