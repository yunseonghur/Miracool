import React from "react"
import "./CustomFooter.css"

export default function CustomFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid footer-wrapper">
      <div className="contact-info text-center">
        <h5>Contact Information</h5>
        <h5>Miracool Air Conditioning LTD</h5>
        <div className="contact-method">
          <a href="tel:7786895531"><img width="30" height="30" src="https://img.icons8.com/material-two-tone/24/ringer-volume.png" alt="ringer-volume"/>&nbsp;778-689-5531</a>
          <a href="mailto:miracoolhvac@gmail.com"><img width="30" height="30" src="https://img.icons8.com/material-two-tone/30/mail.png" alt="mail"/>&nbsp;miracoolhvac@gmail.com</a><br />
        </div>
      </div>
      <br />
      <div className="text-center emergency-text" >Emergency services availlable</div>

      <p className="float-end">
        <a href="#" data-toggle="tooltip" title="Back to top">Back to top</a>
      </p>
      <p>
          © {year} Miracool Air Conditioning LTD. 
          {/* · <a href="#">Privacy</a> · <a href="#">Terms</a> */}
      </p>
    </footer>
  );
}