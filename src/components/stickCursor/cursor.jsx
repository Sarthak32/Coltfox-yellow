import { useRef,useEffect, useState } from 'react'
import { motion ,useMotionValue, useSpring, transform, animate} from 'framer-motion';
import "./cursor.css"

export default function Cursor({stickyElement}) {
    const CursorSize =20;
    const mouse={
        x:useMotionValue(0),
        y:useMotionValue(0)
    }
    const smoothOptions = {damping: 30, stiffness: 250, mass: 0.6}
    const smoothMouse = {
        x: useSpring(mouse.x,smoothOptions),
        y: useSpring(mouse.y,smoothOptions)
      }
    const manageMouseMove =(e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX-CursorSize/2)
        mouse.y.set(clientY-CursorSize/2)
    }
    useEffect(()=>{
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    })

return(
    <motion.div className='cursor'
    style={{left: smoothMouse.x, top: smoothMouse.y}} >
        
    </motion.div>
)
    
}
