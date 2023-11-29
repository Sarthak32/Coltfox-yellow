import React, { useState, useEffect } from 'react';
import "./Page2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const Page2 = () => {
  const content = [
    {
      imgSrc: "hudbil-logo.png",
      pContent: "HUDBIL delivers B2B engaging designing and development with the latest technology tools to empower business and drive success, at speed and scale."
    },
    {
      imgSrc: "kalacode-logo.png",
      pContent: "KALACODE delivers proprietary 3D workflows and is responsible for the world’s firsts in AR, including the world’s largest deployment of WebAR."
    },
    {
      imgSrc: "maus-logo.png",
      pContent: "MAUS is a ‘Gen-Z’ Product that allows users to use their mobile phones as an exclusive mouse without wires and other connections. A user journey touch point."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeContent = () => {
      gsap.to(".comp-c img, .comp-c p", { opacity: 0, duration: 0.5, onComplete: () => setContentPrevState() });
    };

    const setContentPrevState = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      gsap.to(".comp-c img, .comp-c p", { opacity: 1, duration: 0.5 });
    };

    const contentChangeInterval = setInterval(changeContent, 5000);

    return () => clearInterval(contentChangeInterval);
  }, [currentIndex, content]);

  return (
    <div className="page2-container">
      <div className="page2-rect">
        <div className="page2-right">
          <div className="weare">Who We Are</div>
          <div className="title bg-black">Our Brands</div>
          <div className="description">
            HUDBIL Private Limited is a 360 Degree Exclusive Co-creators. Passionate innovators. We’re your Design, Development and Marketing partners, working at the cutting edge of digital product development. We have the technical, marketing expertise and domain experience to help you push boundaries, regardless of your industry.
          </div>
        </div>
        <div className="comp-cards">
          <div className="comp-card-grp">
          {[0, 1, 2].map((index) => (
  <div className="comp-c" key={index}>
    <img
      src={content[(currentIndex + index) % content.length].imgSrc}
      alt=""
      style={{ marginTop: index === 1 ? '75px' : index === 2 ? '150px' : '0' }}
    />
    <p>{content[(currentIndex + index) % content.length].pContent}</p>
    <button className="learnmore">
      Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} />
    </button>
    <div className="comp-line-design">
      <img src='./line-design.png' alt="line design" />
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
