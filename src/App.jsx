import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cursor from "./components/stickCursor/cursor";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from "./Pages/Home/Home";
import Ourawards from "./Pages/Ourawards/Ourawards";
import { motion } from 'framer-motion'; 



const App = () => {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
    
    return (
      <Router>
    <div className="app"  >
          <Cursor/>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourawards" element={<Ourawards />} />
        </Routes>
          <Footer/>
    </div>
    </Router>
    )
  }

export default App;
