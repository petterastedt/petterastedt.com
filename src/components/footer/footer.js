import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="footer-text">Made with <span role="img" aria-label="Blue heart emoji">💙</span> using Gatsby.js</div>
    <ul className="footer-links resetList">
      <li className="footer-link">
        <a href="https://www.google.com" target="_blank" alt="Link to google"  rel="noopener noreferrer">Google</a>
      </li>
      <li className="footer-link">
        <a href="https://soundcloud.com/petter-stedt/" target="_blank" alt="Link to Soundcloud"  rel="noopener noreferrer">Soundcloud</a>
      </li>
      <li className="footer-link">
        <a href="https://www.linkedin.com/in/petterastedt/" target="_blank" alt="Link to LinkedIn"  rel="noopener noreferrer">LinkedIn</a>
      </li>
      <li className="footer-link">
        <a href="https://github.com/petterastedt/" target="_blank" alt="Link to Github"  rel="noopener noreferrer">Github</a>
      </li>
    </ul>
  </footer>
)

export default Footer