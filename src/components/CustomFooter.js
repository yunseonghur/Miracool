import React from "react"
import "./CustomFooter.css"

export default function CustomFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="container-fluid footer-wrapper">
        <div className="contact-info text-center">
          <h5>Contact Information</h5>
          <h5>Miracool Air Conditioning LTD</h5>
          <div className="contact-method">
            <div><a href="tel:7786895531"><img width="30" height="30" src="https://img.icons8.com/material-two-tone/24/ringer-volume.png" alt="ringer-volume"/>&nbsp;778-689-5531</a></div>
            <div><a href="mailto:miracoolhvac@gmail.com"><img width="30" height="30" src="https://img.icons8.com/material-two-tone/30/mail.png" alt="mail"/>&nbsp;miracoolhvac@gmail.com</a></div>
          </div>
        </div>
        <div className="text-center emergency-text" ><b>Emergency services availlable</b></div>

        <div className="copyright mt-3">
          Copyright © {year} Miracool Air Conditioning LTD. 
            {/* · <a href="#">Privacy</a> · <a href="#">Terms</a> */}
        </div>
        <div className="float-end mt-3">
          <a href="/#" data-toggle="tooltip" title="Back to top">Back to top</a>
        </div>
      </footer>
    </>

  );
}