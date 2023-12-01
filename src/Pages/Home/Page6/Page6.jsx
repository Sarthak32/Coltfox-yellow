import React,{useRef,useState,useEffect } from 'react';
import './Page6.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Page6 = () => {
    
    useEffect(() => {
        // Set up GSAP animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page6-container',
            start: 'top center',
            end: 'bottom center',
            scrub: 1, // Adjust the scrub value as needed
          },
        });
    
        // Define animations for each page6-cont element
        document.querySelectorAll('.page6-cont').forEach((el, index) => {
          tl.fromTo(
            el,
            { x: '80%' }, // Initial position (right side)
            { x: '0%', duration: 1, opacity: 1 }, // Final position (left side)
            `-=${index === 0 ? 0 : 0.5}` // Adjust the delay for each element
          );
        });
      }, []);
    return(
    <div className="page6-container" >
      <button className='howdowe-btn'>How We Do It</button>
      <div className="page6-title">Process & Approach</div>
        <div className="page6-cont"  >
          
            <div className="protitle">1. <div className="innert">Requirements</div></div>
            <div className="prodes">Our initial meeting or call will identify your objectives and decipher exactly how we can help. This involves some deep digging into your company, your competitors, your audience and, most importantly, what you want to achieve.</div>

        </div>
        <div className="page6-cont">
            <div className="protitle">2. <div className="innert">Strategy</div></div>
            <div className="prodes">We begin to explore all the possible avenues your business could take and we develop a custom strategy to hit your business goals, underpinned by a strategic digital plan. This is the step where no idea is a bad idea; really anything goes!</div>

        </div>
        <div className="page6-cont">
            <div className="protitle">3. <div className="innert">Launch</div></div>
            <div className="prodes">After refining the concept we execute the final solution, always in budget and always on time. We'll be on hand to closely monitor the launch and keep you updated We track the project or campaign to ensure the results match your objectives.</div>

        </div>
        <div className="page6-cont">
            <div className="protitle">4. <div className="innert">Enhance</div></div>
            <div className="prodes">Here we refine and optimise the project or campaign to maximise ROI and highlight key successes to carry into future projects. We cycle through a series of continuous improvement sprints to maximise and achieve optimum performance.</div>

        </div>
        <div className="page6-endcont">
          <p>For over a <div className='endcont-style'>decade</div>, we’ve been delivering ‘Marketing  Experience’ that will amaze
you</p>
        </div>
    </div>
    )
};

export default Page6;
