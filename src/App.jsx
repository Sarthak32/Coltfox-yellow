import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cursor from "./components/stickCursor/cursor";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from "./Pages/Home/Home";
import Ourblogs from "./Pages/Ourblogs/Ourblogs";
import Ourawards from "./Pages/Ourawards/Ourawards";
import Ourworkmain from "./Pages/Ourworkmain/Ourworkmain";
import Ourservicesmain from "./Pages/Ourservicesmain/Ourservicesmain";
import Ourservicesinside from "./Pages/Ourservicesinside/Ourservicesinside";
import Contactus from "./Pages/Contactus/Contactus";
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
          <Route path="/Ourblogs" element={<Ourblogs />} />
          <Route path="/Ourworkmain" element={<Ourworkmain />} />
          <Route path="/Ourservicesmain" element={<Ourservicesmain />} />
          <Route path="/Ourservicesinside" element={<Ourservicesinside />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
          <Footer/>
    </div>
    </Router>
    )
  }

export default App;
