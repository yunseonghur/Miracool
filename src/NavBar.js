import React, {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import MiracoolLogo from "./assets/miracool_logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css';

export default function ContactUs() {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="miracool">
        <img className="nav-logo" src={MiracoolLogo} alt="miracool" />
      </Link>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
      onClick={() => setIsMobile(false)}
      >
        <CustomLink className="home" to="/">Home</CustomLink>
        <CustomLink className="aboutus" to="/aboutus">About Us</CustomLink>
        <CustomLink className="services" to="/services">Services</CustomLink>
        <CustomLink className="contactus" to="/contactus">Contact Us</CustomLink>
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