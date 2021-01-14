import React from 'react'
import Img from "gatsby-image"

const Resume = ({data}) => (
  <div className="resume componentSpacing" id="resume" data-aos="fade-up">
    <div className="content">
      <div className="content-text"
        dangerouslySetInnerHTML={{ __html: data.resumeIntro }}>
      </div>
      <a href={data.pdf.mediaItemUrl} alt="Download resume">
        <div className="content-image box">
          <Img fluid={data.image.imageFile.childImageSharp.fluid}
            className="image"
            alt="Resume preview"/>
          <div className="linkWrapper">
            <span>{ data.downloadLabel }</span>
          </div>
        </div>
      </a>
    </div>
  </div>
)

export default Resume