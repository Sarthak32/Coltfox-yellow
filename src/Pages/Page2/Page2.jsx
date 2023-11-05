import React, { useEffect, useState } from 'react';
import './Page2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion, useTransform, useScroll } from 'framer-motion';

const Page2 = () => {
  const { scrollY } = useScroll();
  const [translateY, setTranslateY] = useState(0);
  const [opacity, setOpacity] = useState(0.3);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      const scrollValue = scrollY.get();
      const translateValue = -15 * (scrollValue / 160);
      setTranslateY(translateValue);
  setTranslateY(translateValue);
  setOpacity(0.4 + scrollValue / 120);
    };

    // Attach scroll event listener to update values continuously
    window.addEventListener('scroll', updateValues);
    

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', updateValues);
    };
  }, [scrollY]);

  return (
    <div className="page2-container">
      <div className="title">Innovation at <br />your fingertips</div>
      <div className="description">
        Hudbil is a global creative agency. We use design, animation, and technology to tell <br />transformational stories for the world's leading organizations.
      </div>

      <div className="graphs">
        <motion.div
          className="graph"
          style={{ y: translateY, opacity: opacity ,height:`${height}px`}}
          initial={{ opacity: 0.1, y: 0, height: '0' }}
          animate={{ opacity: 0.4,  height: '600px' }}
          whileHover={{ y: -10, scale: 1.1 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff', transform: 'rotate(135deg)', height: '60px' }} />
          <div className="graph-name">Discover</div>
        </motion.div>

        <motion.div
          className="graph"
          style={{ y: translateY, opacity: `${opacity}` ,height:`${height}px`}}
          initial={{ opacity: 0.1, y: 0, height: '0' }}
          animate={{ opacity: 0.4,   height: '600px' }}
          whileHover={{ y: -10, scale: 1.1 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff', transform: 'rotate(45deg)', height: '60px' }} />
          <div className="graph-name">Design</div>
        </motion.div>

        <motion.div
          className="graph"
          style={{ y: translateY, opacity: opacity ,height:`${height}px`}}
          initial={{ opacity: 0.1, y: 0, height: '0' }}
          animate={{ opacity: 0.4,  height: '600px' }}
          whileHover={{ y: -10, scale: 1.1 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff', transform: 'rotate(-45deg)', height: '60px' }} />
          <div className="graph-name">Build</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page2;
