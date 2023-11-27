import React,{useRef,useState,useEffect } from 'react';
import './Page6.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Page6 = () => {
    return(
    <div className="page6-container">
        <div className="page6-cont">
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
        
    </div>
    )
};

export default Page6;
