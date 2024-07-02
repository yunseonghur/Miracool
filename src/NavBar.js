import React, {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import MiracoolLogo from "./assets/Miracool_transparent_sm.svg";
import CallUsNow from "./assets/icon-callusnow.png";
// import CallUsNowB from "./assets/icon-callusnow-bk.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css';

export default function ContactUs() {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="navHeader">
        <Link to="/" className="miracool">
          <img className="nav-logo" src={MiracoolLogo} alt="miracool" />
        </Link>
        <a className="navMsg" href="tel:7786895531">
          <img width="36" height="36" src={CallUsNow} alt="ringer-volume"/>&nbsp;Call us now <br/>
          <span className="navContact">778-689-5531</span>
        </a>
      </div>

      <nav className="nav">
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
        >
          <CustomLink className="home" to="/">Home</CustomLink>
          <CustomLink className="aboutus" to="/aboutus">About Us</CustomLink>
          <CustomLink className="services" to="/services">Services & Projects</CustomLink>
          <CustomLink className="contactus" to="/contactus">Contact Us</CustomLink>
          <CustomLink className="translate" to="/translate">한국어</CustomLink>
        </ul>

        <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </nav>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>

  )
}