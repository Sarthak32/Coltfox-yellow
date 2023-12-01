import React,{useState} from 'react';
import './Page4.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Page4 = () => {
  const [selectedService, setSelectedService] = useState('Performance Marketing');

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };
  return (
    <div className="page4-container">
      <div className="page4-left">
      <button className='whatwedo-btn'>What We Do</button>
      <div className="page4-title">Our Services</div>
      <div className="page4-des">Creative solutions from strategy through omni- channels placements to engag, acquire, and transform brands for sustained growth.</div>
      <div className="page4-line"/>
      <div className="perf" onClick={() => handleServiceClick('Performance Marketing')}>
        <div className="srno">01</div>
        <div className="innertitle">Performance Marketing</div>
        <FontAwesomeIcon className="page4-arr" icon={faArrowRight} style={{ marginLeft:"325px"}}  />
      </div>
      <div className="page4-line"/>
      <div className="perf" onClick={() => handleServiceClick('Omni - channel Marketing')}>
        <div className="srno">02</div>
        <div className="innertitle">Omni - channel Marketing</div>
        <FontAwesomeIcon className="page4-arr"  icon={faArrowRight} style={{ marginLeft:"290px"}} />
      </div>
      <div className="page4-line"/>
      <div className="perf" onClick={() => handleServiceClick('Lead Generation')}>
        <div className="srno">03</div>
        <div className="innertitle">Lead Generation</div>
        <FontAwesomeIcon className="page4-arr"  icon={faArrowRight} style={{ marginLeft:"430px"}} />
      </div>
      <div className="page4-line"/>
      <div className="perf" onClick={() => handleServiceClick('Content Marketing')}>
        <div className="srno">04</div>
        <div className="innertitle">Content Marketing</div>
        <FontAwesomeIcon className="page4-arr"  icon={faArrowRight} style={{ marginLeft:"400px"}} />
      </div>
      <div className="page4-line"/>
      <button className='expl'>Explore Services<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000",height:"25px",width:"20px",transform: 'rotate(-45deg)' }} /></button>
    </div>
    <div className="page4-right">
        <div className="changing-desof">
          <div className="innertitl">{selectedService}<img src="./arr-w-learn.png" /></div>
          {selectedService === 'Performance Marketing' && (
          <div className="titldes">ROIs are at the heart of performance marketing, as every action can be tracked and measured against key performance indicators (KPIs). Whether it be the number of clicks, page views or sales, these key metrics are crucial to measuring and enhancing performance</div>
        )}
          {selectedService === 'Omni - channel Marketing' && (
          <div className="titldes">Content for Omni - channel Marketing...</div>
        )}
        {selectedService === 'Lead Generation' && (
          <div className="titldes">Content for Lead Generation...</div>
        )}
        {selectedService === 'Content Marketing' && (
          <div className="titldes">Content for Content Marketing...</div>
        )}

        </div>
    </div>
    </div>
  );
};

export default Page4;
