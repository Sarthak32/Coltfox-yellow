import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import './Page1.css'; // Import the provided CSS file

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const typedTextSpan = document.querySelector(".head2-anm");
    const cursorSpan = document.querySelector(".typing-cursor");

    const textArray = ["ambitious - brands", "to generate", "Revenue", "Visibility", "Engagement"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 900);
      }
    }

    if (isAnimating) {
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    }
  }, [isAnimating]);

  useEffect(() => {
    // Toggle the animation after a delay
    const delay = 200; // Delay in milliseconds before starting the animation

    const animationTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    // Clean up when the component unmounts or when isAnimating becomes false
    return () => {
      clearTimeout(animationTimeout);
      setIsAnimating(false); // Reset isAnimating state
    };
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div className='main-container'>
      <div className='page1-content'>
        <div className='head1'>We help</div>
        <p><span className="head2-anm"></span><span className="typing-cursor"></span></p>
        <div className='head3'>by marketing</div>
      </div>

      <button className='talk-btn'>
        Let's talk <img src='./arr-b.png' alt='Arrow' />
      </button>
    </div>
  );
};

export default Home;
