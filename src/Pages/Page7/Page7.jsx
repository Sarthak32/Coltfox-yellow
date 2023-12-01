import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Page7.css';

const Page7 = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.page7-container',
        start: 'top center',
        end: 'bottom center',
        scrub: 1, // Adjust the scrub value as needed
      },
    });

    sectionRefs.current.forEach((section, index) => {
      tl.fromTo(
        section,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 1 },
        `-=${index === 0 ? 0 : 0.5}` // Adjust the delay for each element
      );
    });
  }, []);

  return (
    <div className="page7-container">
      <button className='whatwefocus-btn'>What We Focus</button>
      <div className="page7-title">Industries</div>
      <div className="page7-des">Regardless of your operation’s size, collaboration toward a shared goal leads to success.</div>
      <div className="page7-content">
        <div className="section1" ref={(ref) => (sectionRefs.current[0] = ref)}>
          <div className="section-title">FRANCHISES</div>
          <div className="page7-line" />
          <div className="sec-logo"><img src="./sec1-logo.png" alt="" /></div>
          <div className="sec-des1">Not only do we increase B2B leads for franchisors, we also help home-town franchisees generate new customers and increase customer loyalty.</div>
          <div className='learn-m'>Learn more<img src="./arr-w-learn.png" alt="" className='learn-m-arr' /></div>
        </div>
        <div className="section2" ref={(ref) => (sectionRefs.current[1] = ref)}>
          <div className="section-title">NON-PROFITS</div>
          <div className="page7-line" />
          <div className="sec-logo"><img src="./sec2-logo.png" alt="" /></div>
          <div className="sec-des2">Empowering non-profit organizations to increase engagement, loyalty, impact, and donations worldwide is our major focus.</div>
          <div className='learn-m'>Learn more<img src="./arr-w-learn.png" alt="" className='learn-m-arr' /></div>
        </div>
        <div className="section3" ref={(ref) => (sectionRefs.current[2] = ref)}>
          <div className="section-title">E-COMMERCE</div>
          <div className="page7-line" />
          <div className="sec-logo"><img src="./sec3-logo.png" alt="" /></div>
          <div className="sec-des3">We boost online retailers' digital presence, optimize conversion rates, and enhance the customer shopping experience for increased sales and profitability.</div>
          <div className='learn-m'>Learn more<img src="./arr-w-learn.png" alt=""  className='learn-m-arr'/></div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
