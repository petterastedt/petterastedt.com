import React, { useState } from 'react'

const Navbar = ({data}) => {
  const [isExpanded, setIsExpanded] = useState (false)
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
      <div className="navbar-title">https://www.petterastedt.com/</div>
      <ul className={`list resetList ${!isExpanded && "list--isHidden"}`}>
        {data[1].node.menuItems.edges.map((item, index) => (
          <li className="list-item" key={index}>
            <a href={item.node.url}
              className="list-itemLink">{item.node.label}</a>
            {index + 1 !== data[1].node.menuItems.edges.length && <span className="separator">-</span>}
          </li>
        ))
      }
      </ul>
    </nav>
  )
}

export default Navbar