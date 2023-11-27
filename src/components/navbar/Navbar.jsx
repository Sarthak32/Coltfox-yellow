import React,{useState} from 'react'
import "./Navbar.css"
import { motion,useAnimation  } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoExtended, setIsLogoExtended] = useState(false);

  const controls = useAnimation();

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);

    // Check if the menu is open, and if the logo is extended, reset the animation
    if (isMenuOpen && isLogoExtended) {
      setIsLogoExtended(false);
      controls.start({ scale: 1 });
    }
  };

  const handleLogoClick = () => {
    if (!isMenuOpen) {
      setIsLogoExtended(!isLogoExtended);
    }
  };


  return (
    <div className="navbar">
      <div className={`logo ${isLogoExtended ? 'extended' : ''}`}
      onClick={handleLogoClick}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}>
      <motion.img 
          className={`logo-img ${isLogoExtended ? 'extended' : ''}`}
          src={isLogoExtended ? "./expandedlogo.png" : "./logo.png"}
          alt="Company Logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 ,delay: isLogoExtended ? 1.2 : 0}}
        />
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