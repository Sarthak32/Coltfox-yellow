import React,{useState} from 'react'
import "./Navbar.css"
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="./logo.png" alt="Company Logo" />
      </div>
      <div className="menu-icon">
        <motion.img src="./menu.png" alt="Menu Icon" 
        onClick={handleClick}
        initial={{ scale: 0 }}
        animate={{ rotate: isMenuOpen ? -90 : 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}/>
      </div>
    </div>
  )
}

export default Navbar