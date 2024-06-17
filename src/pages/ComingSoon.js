import React from "react"
import "./ComingSoon.css";
import MiracoolLogo from "../assets/miracool_logo.svg";
import { ReactComponent as IconYoutube } from '../assets/icons8-youtube.svg';

export default function ComingSoon() {
  return <div className="card amatic-sc-regular">

        <div className="header">
          <a href=".">
            <img className="nav-logo" src={MiracoolLogo} alt="miracool" />
          </a>
        </div>

        <div className="content">
          <div className="title-holder">
            <h1>Coming Soon</h1>
            <p>We'll be here soon with our new awesome site. </p>
          </div>

          <div className="social">
            <a href="https://www.youtube.com/@miracool6708" title="Youtube" target="_blank" rel="noopener noreferrer">
              <IconYoutube className="icon" />
            </a>
          </div>
        </div>

        
      </div>
}