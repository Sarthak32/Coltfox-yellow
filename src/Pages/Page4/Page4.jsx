import React, { useEffect,useRef } from 'react';
import { motion, useAnimation, useDragControls } from 'framer-motion'; // Import Framer Motion
import './Page4.css';

const Page4 = () => {
  const dragControls = useDragControls();

  const containerRef = useRef(null);

  const getRandomPosition = (container) => {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const blockWidth = 250; // Width of each floating block
    const blockHeight = 250; // Height of each floating block
  
    return {
      x: Math.random() * (containerWidth - blockWidth),
      y: Math.random() * (containerHeight - blockHeight),
    };
  };

  
  useEffect(() => {
    const container = containerRef.current;
    const blocks = container.querySelectorAll('.floating-stack');
  
    blocks.forEach((block) => {
      const { x, y } = getRandomPosition(container);
      
    });
  }, []);
  

  return (
    <div className="page4-container" ref={containerRef}>
      <div className="stable">Our Stacks</div>
      <div className="stacks">
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          CSS
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          HTML
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          JS
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          NextJS
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          React
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          Angular
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
        >
          typescript
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          3D
        </motion.div>
      </div>
    </div>
  );
};

export default Page4;
