import React ,{useRef,useState,useEffect }from 'react';
import './Page3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation,useScroll } from 'framer-motion';

const Page3 = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(scrollY.get());
    };

    const startAnimation = async () => {
      if (scrollPosition > 100) {
        await controls.start('visible');
      } else {
        await controls.start('hidden');
      }
    };

    updateScrollPosition();
    startAnimation();

    const unsubscribe = scrollY.onChange(updateScrollPosition);

    return () => {
      unsubscribe();
    };
  }, [scrollY, scrollPosition, controls]);


  return (
    <div className='page3-container'>
      <div className='section-heading'>what we do</div>
      <button className="slider" >
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f32525", fontSize: "2rem" }} />
        </button>

      <div className='page-graphs'>
      <motion.div className="page-graph"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}  >
       
          <div className='grph-name'> <FontAwesomeIcon  className="arrow" icon={faArrowLeft}  style={{color: "#ffffff",transform: "rotate(135deg)",height:"60px"}} />Design</div>
          <div className="desc">
            <h1>01. Design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed lorem quam fringilla eleifend semper vulputate aliquam. Eu dignissim cursus risus tempus. Feugiat morbi non vitae eget auctor. Et.
            </p>
          </div>
          <div className="desc2">
            <h1>02. Design</h1>
            <p> Lorem ipsum dolor sit amet consectetur.Sed lorem quam fringilla eleifend semper vulputate aliquam.</p>
            </div>
        </motion.div>

        <motion.div className="page-graph"  initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
       
          <div className='grph-name'> <FontAwesomeIcon  className="arrow" icon={faArrowLeft}  style={{color: "#ffffff",transform: "rotate(45deg)",height:"60px"}} />Frontend</div>
          <div className="desc">
            <h1>01. Design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed lorem quam fringilla eleifend semper vulputate aliquam. Eu dignissim cursus risus tempus. Feugiat morbi non vitae eget auctor. Et.
            </p>
          </div>
          <div className="desc2">
            <h1>02. Design</h1>
            <p> Lorem ipsum dolor sit amet consectetur. Sed lorem quam fringilla eleifend semper vulputate aliquam. Eu dignissim cursus risus tempus. Feugiat morbi non vitae eget auctor. Et.</p>
          </div>
        
        </motion.div>

        <motion.div className="page-graph"  initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
        
          <div className='grph-name'><FontAwesomeIcon className="arrow" icon={faArrowLeft}  style={{color: "#ffffff",transform: "rotate(-45deg)",height:"60px"}} />Backend</div>
          <div className="desc">
            <h1>01. Design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed lorem quam fringilla eleifend semper vulputate aliquam. Eu dignissim cursus risus tempus. Feugiat morbi non vitae eget auctor. Et.
            </p>
          </div>
          <div className="desc2">
            <h1>02. Design</h1>
            <p> Lorem ipsum dolor sit amet consectetur. Sed lorem quam fringilla eleifend semper vulputate aliquam. Eu dignissim cursus risus tempus.</p>
          </div>
        </motion.div>

        <motion.div className="page-graph" initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
       
          <div className='grph-name'> <FontAwesomeIcon className="arrow" icon={faArrowLeft}  style={{color: "#ffffff",transform: "rotate(-135deg)",height:"60px"}} />More</div>
          <div className="desc">
            <h1>04. More</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed lorem quam fringilla eleifend semper vulputate aliquam. Eu dignissim cursus risus tempus. Feugiat morbi non vitae eget auctor. Et.
            </p>
          </div>
        </motion.div>
       
      </div>
    </div>
  );
};

export default Page3;
