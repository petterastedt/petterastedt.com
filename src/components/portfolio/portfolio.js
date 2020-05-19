import React from 'react';
import Img from "gatsby-image"

const Portfolio = ({data, projects}) => {
  return (
    <div className="portfolio componentSpacing" id="portfolio">
      <div className="content">
        <div className="content-text"
          dangerouslySetInnerHTML={{ __html: data.projectsIntro }}>
        </div>
      </div>
      <div className="buttons">
      { data.technologyBadges.map((badge, index) => (
        <div className={`category-btn box button-noHover badge ${badge.split(" ")[0].toLowerCase()}`} key={index}>{ badge }</div>
        ))
      }
      </div>
      <div className="projectWrapper">
        <ul className="list resetList">
          { projects.map((item, index) => (
            <li className="list-item box" key={index} data-aos="fade-up">
              <Img fluid={item.project.previewImage.imageFile.childImageSharp.fluid}
                className="image"
                alt="Project preview"/>
              <div className={`label ${!item.project.githubLink && !item.project.liveLink && "label--isVisible"}`}>UNDER DEVELOPMENT</div>
              <div className={`label ${item.project.liveLink === "https://futuritytimecapsule.herokuapp.com/" && "label--isVisible"}`}>TEST VERSION ONLINE</div>
              <div className="content">
                <div className="content-wrapper">
                  <h3 className="content-title">{item.project.title}</h3>
                  <p className="content-excerpt">{item.project.excerpt}</p>
                </div>
                <ul className="content-links resetList">
                  <li className="content-linkItem">
                    {item.project.githubLink ?
                      <a href={item.project.githubLink}
                          alt="Link to github"
                          target="_blank"
                          rel="noopener noreferrer">GITHUB</a>
                      : <strike className="strike">GITHUB</strike>
                    }
                  </li>
                  <span className="separator">-</span>
                  <li className="content-linkItem">
                    {item.project.liveLink ?
                      <a href={item.project.liveLink}
                          alt="Link to live site"
                          target="_blank"
                          rel="noopener noreferrer">LIVE SITE</a>
                    : <strike className="strike">LIVE SITE</strike>
                    }
                  </li>
                </ul>
              </div>
           </li>
           )
          )}
        </ul>
      </div>
    </div>
  )
}

export default Portfolio