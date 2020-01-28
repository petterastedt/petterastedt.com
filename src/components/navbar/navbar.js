import React, { useState } from 'react'

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState (false)
  const toggleExpanded = () => setIsExpanded(!isExpanded)

  return (
    <nav
      className={`navbar box ${isExpanded && "navbar--isExpanded"}`}
      onClick={() => !isExpanded && toggleExpanded()}
    >
      <div className={`hamburger ${isExpanded && "hamburger--isHidden"}`}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className="navbar-title">https://www.petterastedt.com/</div>
      <ul className={`list resetList ${!isExpanded && "list--isHidden"}`}>
        <li className="list-item">
          <a href="#intro">About</a>
          <span className="separator">-</span>
        </li>
        <li className="list-item">
          <a href="#portfolio">Portfolio</a>
          <span className="separator">-</span>
        </li>
        <li className="list-item">
          <a href="#resume">CV</a>
          <span className="separator">-</span>
        </li>
        <li className="list-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar