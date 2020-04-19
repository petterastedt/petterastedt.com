import React from 'react'
import image from './../../assets/images/petter_undraw.svg'

const Hero = ({data}) => (
  <div className="hero">
    <div className="content">
      { !data.hideBackgroundImage &&
        <img src={image} 
        alt="Header background"
        className="svgImage" />
      }
      <div className="content-upper"
        dangerouslySetInnerHTML={{ __html: data.headerWysiwyg }}>
      </div>
        {data.separator &&
          <div className="content-divider"></div>
        }
      <div className="content-lower"
        dangerouslySetInnerHTML={{ __html: data.headerLower }}>
      </div>
      <div className="buttonWrapper">
        <button className="button box"><a href="#intro">{data.buttonText}</a></button>
      </div>
    </div>
  </div>
)

export default Hero