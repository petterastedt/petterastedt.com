import React from 'react'

const Footer = ({data, footerData}) => (
  <footer className="footer">
    <div className="footer-text"
      dangerouslySetInnerHTML={{ __html: footerData.footerSubtitle }}>
    </div>
    <ul className="footer-links resetList">
      { data[0].node.menuItems.edges.map((item, index) => (
        <li className="footer-link" key={`Footer menu item ${index}`}>
          <a href={item.node.url} target="_blank" alt={`Link to ${item.node.label}`} rel="noopener noreferrer">{item.node.label}</a>
        </li>
      ))
      }
    </ul>
  </footer>
)

export default Footer