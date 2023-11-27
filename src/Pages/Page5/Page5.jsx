import React, { useEffect,useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Page5.css';
import {gsap} from 'gsap';


const Page5 = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const title = container.querySelector('.page5-title');
    const description = container.querySelector('.page5-des');

    const handleMouseOver = () => {
      gsap.fromTo(
        [title, description],
        {
          opacity: 1,
          y: 50, // Initial position, adjust as needed
          
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    };

    const handleMouseOut = (e) => {
      // Check if the mouse is leaving the title or description
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('page5-title') && !e.relatedTarget.classList.contains('page5-des')) {
        gsap.to([title, description], {
          opacity: 0,
          y: 50, // Move back down, adjust as needed
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }
    };

    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseout', handleMouseOut);

    return () => {
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return(
    <div className="page5-container">
        <button className='seeall'>See all project <img src='./arr-w.png'/></button>
        <div className="page5-cont" ref={containerRef}>
        <div className="page5-title">CMG.</div>
        <div className="page5-des">CMG - Digital & Smart production agency</div>
        <button className='viewproj'>View Project<img src='./arr-w.png'/></button>
        </div>
        <div className="page5-box">
          <div className="whatwedid-btn">What We Did</div>
          <div className="box-title">CMG.<img src='./crossarr-w.png'/></div>
          <div className="box-des">Lorem ipsum dolor sit amet. Qui cumque deleniti sed maxime debitis aut neque cupiditate At voluptas autem qui officiis exercitationem? Vel doloribus sint et porro aliquid ut nihil quaerat aut enim nihil ea voluptatem sunt quo quod odit.</div>
          <div className="boxmid-s">
            <div className="whitebox">Design</div>
            <div className="whitebox">Development</div>
            <div className="whitebox">Motion</div>
          </div>
          <div className="box-cont">
            <div className="box-brand">Oryx<img src='./crossarr-w.png'/></div>
            <div className="box-brand">Alpsko mleko<img src='./crossarr-w.png'/></div>
            <div className="box-brand">Cedevita<img src='./crossarr-w.png'/></div>
          </div>
        </div>
        


    </div>
  )

};

export default Page5;
