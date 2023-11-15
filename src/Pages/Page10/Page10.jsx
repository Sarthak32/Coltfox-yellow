import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCopyright } from '@fortawesome/free-solid-svg-icons';
import "./Page10.css"


const Page10 = () => {
  return (
    <div className='page10-container'>
      <div className="firsthalf">
        <div className="page10-left">
            <img src='./footerlogo.png'/>
            <div className="compaddress"><img src='./address.png' style={{marginRight:"8px"}}/>
                235, 2nd & 3ed Floor, 13th Cross Rd, Indiranagar ||<br />    Stage, Hoysala Nagar, Bangalore - 560038,<br/>   Karnataka, India.
            </div>
            <div className="compemail"><img src='./mail.png' style={{marginRight:"8px"}}/>info@hudbill.com</div>
            <div className="compcontact"><img src='./contact.png' style={{marginRight:"8px"}}/>+91 88844-09369</div>

        </div>
        
        </div>
      <div className='form'>
            <div className="note">Please let us know about your project and we will be in touch very soon.</div>
            <div className="innerbox">
                <input className='name' placeholder="Name"/>
                <input className='tele' placeholder="Telephone"/>
                <input className='email' placeholder="Email"/>
                <input className='company-input' placeholder="Company"/>
                <select className='services' placeholder='Services'>
                    <option value="" disabled selected>Services</option>
                    <option value="webDesign">Web Design</option>
                    <option value="graphicDesign">Graphic Design</option>
                    <option value="digitalMarketing">Digital Marketing</option>
        
                </select>
                <textarea className='comments' placeholder="Comment" style={{height:"130px", verticalAlign: "top"}}/>

                <button type='submit' className='submitbtn'>Submit</button>
            </div>

      </div>
      <div class="footer">
        <div className="upper-footer" style={{position:"relative"}}>
    <div class="quick-links">
    
        <p style={{fontSize:"24px"}}>Quick links<FontAwesomeIcon  className="arrow" icon={faArrowRight}  style={{color: "#ffffff",transform: "rotate(-45deg)",height:"24px"}} /></p>
        <ul style={{marginTop:"15px"}}>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">What we do</a></li>
            <li><a href="#">What we did</a></li>
        </ul>
    </div>

    <div class="our-brands" style={{marginLeft:"-350px"}}>
    <p style={{fontSize:"24px"}}>Our Brands<FontAwesomeIcon  className="arrow" icon={faArrowRight}  style={{color: "#ffffff",transform: "rotate(-45deg)",height:"24px"}} /></p>
        <ul style={{marginTop:"15px"}}>
            <li><a href="#">Coltfox.com</a></li>
            <li><a href="#">Kalacode.com</a></li>
            <li><a href="#">Mausapp.com</a></li>
            <li><a href="#">Pettsbuy.com</a></li>
        </ul>
    </div>

    <div class="privacy" style={{marginTop:"40px",marginLeft:"-350px"}}>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Accessibility</p>
        <p>Terms of service</p>
    </div>
 
    <div class="vat-info">
        <p>VAT 05629640870</p>
    </div>
    
    </div>
    <div class="location" style={{position:"absolute" ,left:"30px",marginTop:"175px",display:"flex",gap:"100px"}}>
        <p>Working from India</p>
        <p>Operating Worldwide</p>
    </div>
    <hr class="white-line" />

    <div class="follow-us" style={{display:'flex'}}>
        <p style={{fontFamily: "'Poppins', sans-serif", fontSize:"16px"}}>Follow Us: <span>Fb</span> <span>Li</span> <span>Tw</span> <span>Ig</span></p>
        <p style={{marginLeft:'810px',fontSize:'30px',fontFamily: "'Poppins', sans-serif"}}><FontAwesomeIcon icon={faCopyright} style={{color: "#ffffff",}} /> 2016 / 2023 Hudbil Private Limited</p>
    </div>
</div>



    </div>
  )
}

export default Page10