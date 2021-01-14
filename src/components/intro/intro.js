import React from 'react';
import Img from "gatsby-image"

const Intro = ({data}) => (
  <div className="intro componentSpacing" id="intro" data-aos="fade-up">
    <div className="content">
      <Img fluid={data.introImage.imageFile.childImageSharp.fluid}
        className="content-image"
        alt="Portrait photo"/>
      <div className="content-textWrapper"
        dangerouslySetInnerHTML={{ __html: data.introText }}>
      </div>
    </div>
  </div>
)

export default Intro