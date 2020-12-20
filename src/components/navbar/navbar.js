import React, { useState } from 'react'

const Navbar = ({data, language}) => {
  const [isExpanded, setIsExpanded] = useState (false)
  const lang = language === 0 ? 2 : 1 // SET LANGUAGE (2 = SWEDISH, 1 = ENGLISH)

  return (
    <nav
      className={`navbar ${isExpanded && "navbar--isExpanded"}`}
      onClick={() => !isExpanded && setIsExpanded(!isExpanded)}
      onKeyDown={() => !isExpanded && setIsExpanded(!isExpanded)}>
      <div className={`hamburger ${isExpanded && "hamburger--isHidden"}`}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className="navbar-title">{ language === 0 ? "https://www.petterastedt.se/" : "https://www.petterastedt.com/" }</div>
      <ul className={`list resetList ${!isExpanded && "list--isHidden"}`}>
        {data[lang].node.menuItems.edges.map((item, index) => (
          <li className="list-item" key={index}>
            <a href={item.node.url}
              className="list-itemLink">{item.node.label}</a>
            {index + 1 !== data[lang].node.menuItems.edges.length && <span className="separator">-</span>}
          </li>
        ))
      }
      </ul>
    </nav>
  )
}

export default Navbar