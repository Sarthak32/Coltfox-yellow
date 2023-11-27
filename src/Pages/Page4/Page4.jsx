import React from 'react';
import './Page4.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Page4 = () => {
  return (
    <div className="page4-container">
      <button className='whatwedo-btn'>What We Do</button>
      <div className="page4-title">Our Services</div>
      <div className="page4-des">Creative solutions from strategy through omni- channels placements to engag, acquire, and transform brands for sustained growth.</div>
      <div className="page4-line"/>
      <div className="perf">
        <div className="srno">01</div>
        <div className="innertitle">Performance Marketing</div>
        <FontAwesomeIcon className="page4-arr" icon={faArrowRight} style={{ marginLeft:"325px"}}  />
      </div>
      <div className="page4-line"/>
      <div className="perf">
        <div className="srno">02</div>
        <div className="innertitle">Omni - channel Marketing</div>
        <FontAwesomeIcon className="page4-arr"  icon={faArrowRight} style={{ marginLeft:"290px"}} />
      </div>
      <div className="page4-line"/>
      <div className="perf">
        <div className="srno">03</div>
        <div className="innertitle">Lead Generation</div>
        <FontAwesomeIcon className="page4-arr"  icon={faArrowRight} style={{ marginLeft:"430px"}} />
      </div>
      <div className="page4-line"/>
      <div className="perf">
        <div className="srno">04</div>
        <div className="innertitle">Content Marketing</div>
        <FontAwesomeIcon className="page4-arr"  icon={faArrowRight} style={{ marginLeft:"400px"}} />
      </div>
      <div className="page4-line"/>
      <button className='expl'>Expolre Services<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000",height:"25px",width:"20px",transform: 'rotate(-45deg)' }} /></button>
    </div>
  );
};

export default Page4;
