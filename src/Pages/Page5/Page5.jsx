import React, { useEffect,useRef } from 'react';
import { motion, useAnimation, useDragControls } from 'framer-motion'; // Import Framer Motion
import './Page5.css';

const Page5 = () => {
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
    <div className="page5-container" ref={containerRef}>
      <div className="stable">Our tools</div>
      <div className="stacks">
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          Ahrefs
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          Semrush
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          Console
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          Moz
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          google
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
          Analytics
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          Buzzsumo
        </motion.div>
        <motion.div
          className="floating-stack"
          initial={{ opacity: 0.5 }}
          animate={dragControls}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}

        >
          canva
        </motion.div>
      </div>
    </div>
  );
};

export default Page5;
