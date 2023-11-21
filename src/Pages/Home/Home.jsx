import React, { useState, useEffect } from 'react';
import './Home.css';
import { motion, useCycle } from 'framer-motion';

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle the animation after a delay
  useEffect(() => {
    const delay = 500; // Delay in milliseconds before starting the animation

    const animationTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className='main-container'>
      <div className="page1-content">

      <div className="head1">We help</div>
      <div className="head2-anm">
        <div className="head2-first">ambitious - brands</div>
      </div>
      <div className="head3">by marketing</div>

      </div>

      <div className='talk'>Let's talk
      <img src='./arr-b.png'/></div>

    </div>
  );
};

export default Home;
