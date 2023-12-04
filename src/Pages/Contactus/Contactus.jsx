import React from 'react'
import "./Contactus.css"

const Contactus = () => {
  function handleFileSelect(event) {
    const files = event.target.files;

    if (files.length > 0) {
      const fileName = files[0].name;
      alert('File attached: ' + fileName);

      // You can also handle the file upload to a server here if needed
      // Example: sendFileToServer(files[0]);
    }
  }
  return (
    <div className='Contactus'>
      <div className="Contactus-page1">
        <div className="Contactus-title">Tell us above your next</div>
        <div className='Contactus-title-proj'>Project</div>
        <div className="Contactus-page1-end">
          <div className="Contactus-downarr"><img src='./downarr.png' /></div>
          <div className="Contactus-des">Find out our project from below and let’s make your project dreams comes true!</div>
        </div>
        <div className='contactus-linedes' />
      </div>
      <div className="Contactus-page2">
        <div className="Contactus-page2-title">Your  Contact information</div>
        <input className='Contactus-page2-inp' placeholder='Whats your name  *' />
        <input className='Contactus-page2-inp' placeholder='Whats your company *' />
        <input className='Contactus-page2-inp' placeholder='Whats your official email *' />
        <input className='Contactus-page2-inp' placeholder='Whats your Phone number *' />
        <input className='Contactus-page2-inp' placeholder='Your project name  *' style={{ marginBottom: '30px' }} />
        <div className='contactus-linedes' />
        <div className="Contactus-page3">
          <div className="Contactus-page3-bud">Budget</div>
          <div className="select-amount">
            <div className="select-amount-1row">
              <div className="select-amount-opt">Under 10.000 $</div>
              <div className="select-amount-opt">10.000 $ - 20.000 $</div>
              <div className="select-amount-opt-not-decided">Not decided</div>
            </div>
            <div className="select-amount-2row">
              <div className="select-amount-opt">30.000 $ - 40.000 $</div>
              <div className="select-amount-opt">50.000 $ - 60.000 $</div>
            </div>

          </div>
          <div className="tell-us-ab">Tell us about your project in brief</div>
          <textarea className="tell-us-ab-intput" placeholder='Brief us about your project' />
          <div className="attach-file">
            Attached files related to the project
            <div className="attch">
              <label htmlFor="fileInput">
                <img src='./attach.png' alt="Attach File" />
              </label>
              <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileSelect} />
            </div>
          </div>

          <div className='timeline-title'>Choose your timeline so that we understand your seriousness towards the project </div>
          <div className='contactus-linedes' />
          <div className="timline-select">
            <div className="timline-row1">
              <div className="timeline-opt">In next 2 month</div>
              <div className="timeline-opt">In next 3 month</div>
              <div className="timeline-opt">In next 4 month</div>
            </div>
            <div className="timeline-opt-nostrict">No strict Timetable</div>
          </div>
        </div>
        <div className="Contactus-page4">
          <div className="Contactus-page4-title">By submitting this form you agree to <b>privacy policy</b> of <b>HUDBIL PRIVATE LIMITED</b></div>
          <div className="not-rbt-btn">
            <input type="checkbox" id="notRobotCheckbox" />
            <label htmlFor="notRobotCheckbox">I’M NOT A ROBOT</label>
            <img src='./notrbt-c.png' alt="Not a robot icon" />
          </div>

          <div className="contactus-sbmit-btn">Submit<img src='./arr-w.png' /></div>
          <div className="abtus-info">
            <div className="abtus-info-cont">
              <div className="call-btn">call us</div>
              <div className="callus-no"><img src='./phoneimg.png' />+91 88844-09369</div>
            </div>
            <div className="abtus-info-cont">
              <div className="email-btn">Email us</div>
              <div className="email-hud"><img src='./emailimg.png' />info@hudbil.com</div>
            </div>
            <div className="abtus-info-cont">
              <div className="client-sup-ti"> Our Clients Support </div>
              <div className="supp-tick-btn">Support Ticket<img src='./arr-y.png' /></div>
            </div>
          </div>
          <div className="find-us-btn">Find us </div>
          <img className="ourloc-map" src='./ourlocimg.png'></img>

        </div>
      </div>
    </div>
  )
}

export default Contactus