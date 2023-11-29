import React, { useRef, useState, useEffect } from 'react';
import './Page3.css';
import gsap from 'gsap';

const Page3 = () => {
  const movableRef = useRef(null);
  const [contentIndex, setContentIndex] = useState(0);

  const contents = [
    "Our strength lies in our commitment to data-driven performance solutions designed to increase lead generation, customer acquisition, and audience engagement.",
    "Marketing isn’t a one-off activity but a continuous process. We act as an extension to your organization, connecting the dots between ideas, strategy, and technology to deliver long-term, sustainable solutions."
  ];

  useEffect(() => {
    const animateContent = () => {
      gsap.to(movableRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // Change content
          movableRef.current.textContent = contents[contentIndex];

          // Increment contentIndex or reset to 0 if it reaches the end
          setContentIndex((prevIndex) =>
            prevIndex === contents.length - 1 ? 0 : prevIndex + 1
          );

          // Animate back to full opacity
          gsap.to(movableRef.current, {
            opacity: 1,
            duration: 1
          });
        }
      });
    };

    // Set interval to change content every 5 seconds
    const interval = setInterval(animateContent, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [contentIndex]);

  return (
    <div className='page3-container'>
      <div className='section-heading'>Our values define our culture and drive what we do.</div>
      <div className="page3-right">
        <div className="aboutus">About Us</div>
        <div className="stable-des">Coltfox is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent.</div>
        <div className="movable-des">
          <div className="movable" ref={movableRef}>
            {contents[contentIndex]}
          </div>
        </div>
        <div className="line-design" ><img src='./line-design.png' alt="Line Design" /></div>
        <div className="findmore-btn">Find out more<img src='./arr-w.png' alt="Arrow" /></div>
      </div>
    </div>
  );
};

export default Page3;
