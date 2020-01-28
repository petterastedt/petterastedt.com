import React from 'react'
import resume from './../../assets/images/resume.jpg'
import pdf from "./../../assets/files/cv_petterastedt.pdf"

const Resume = () => (
  <div className="resume componentSpacing" id="resume">
    <div className="content">
      <div className="content-text">
        <h2>DOWNLOAD CV</h2>
        <p>
        Did you know that I'm a certified ski- and snowboarding instructor? Head over to <a href="https://www.linkedin.com/in/petterastedt/" target="_blank" alt="Link to LinkedIn"  rel="noopener noreferrer" className="linkSpecial">linkedin</a> and see what else I did before I became a web developer. If you want a more concise overview of my recent studies and work and experience, downloading my CV would be a good place to start.
        </p>
      </div>
      <a href={pdf} alt="Download resume">
        <div className="content-image box">
          <img src={resume} className="image" alt="Resume preview"/>
          <div className="linkWrapper">
            <span>DOWNLOAD PDF (188KB)</span>
          </div>
        </div>
      </a>
    </div>
  </div>
)

export default Resume