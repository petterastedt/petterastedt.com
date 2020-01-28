import React from 'react'

const Hero = () => (
  <div className="hero">
    <div className="content">
      <h1 className="content-title h2">Hi, I’m <strong>Petter</strong>, <span className="emoji" role="img" aria-label="Waving hand">👋</span>
        <br />
        I’m a Swedish frontend web developer based in <strong>Berlin.</strong>
      </h1>
      <div className="content-divider"></div>
      <p className="content-subtitle">
        Currently developing high quality components @ <a href="https://bleech.de/en/" target="_blank" alt="Link to Github"  rel="noopener noreferrer" className="linkSpecial">bleech</a> Berlin
      </p>
      <div className="buttonWrapper">
        <button className="button box"><a href="#intro">Learn more</a></button>
    </div>
    </div>
  </div>
)
export default Hero