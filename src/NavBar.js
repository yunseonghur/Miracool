import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function ContactUs() {
  return <nav className="nav">
    <Link to="/" className="miracool">Miracool</Link>
    <ul>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/aboutus">About Us</CustomLink>
      <CustomLink to="/services">Services</CustomLink>
      <CustomLink to="/contactus">Contact Us</CustomLink>
    </ul>
  </nav>
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