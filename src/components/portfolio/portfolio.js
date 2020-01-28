import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Portfolio = () => {

  return (
    <div className="portfolio componentSpacing" id="portfolio">
      <div className="content">
        <div className="content-text">
          <h2>PORTFOLIO</h2>
          <p>Below is a selection of personal projects I’ve created. For more examples see my <a href="https://github.com/petterastedt/" target="_blank" alt="Link to Github"  rel="noopener noreferrer" className="linkSpecial">github</a> page or <a href="#contact" alt="Send me a message" className="linkSpecial">send me a message</a>. For professional work see the <a href="https://www.bleech.de" target="_blank" alt="Link to Github"  rel="noopener noreferrer" className="linkSpecial">bleech</a> website.</p>
          <p className="subtitle"><strong>Technologies and frameworks I'm using:</strong></p>
        </div>
      </div>
      <div className="buttons">
        <button className="category-btn box button-noHover">Javascript ES6+</button>
        <button className="category-btn box button-noHover">CSS/SCSS</button>
        <button className="category-btn box button-noHover">React</button>
        <button className="category-btn box button-noHover">Node.js</button>
        <button className="category-btn box button-noHover">Express</button>
        <button className="category-btn box button-noHover">MongoDb</button>
        <button className="category-btn box button-noHover">Gatsby</button>
        <button className="category-btn box button-noHover">Next.js</button>
      </div>
      <div className="projectWrapper">
        <ul className="list resetList">
          <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark(sort: {fields: frontmatter___title}) {
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        featuredImage {
                          childImageSharp {
                            fluid(maxWidth: 1280) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                        gitHubLink
                        liveLink
                      }
                      excerpt(pruneLength: 550)
                    }
                  }
                }
              }
            `}
            render={ data => (
              data.allMarkdownRemark.edges.map(project => (
                <li className="list-item box" key={project.node.id}>
                  <Img fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid} className="image" alt="Project preview"/>
                  <div className={`label ${!project.node.frontmatter.gitHubLink && !project.node.frontmatter.liveLink && "label--isVisible"}`}>UNDER DEVELOPMENT</div>
                  <div className="content">
                    <div className="content-wrapper">
                      <h3 className="content-title">{project.node.frontmatter.title}</h3>
                      <p className="content-excerpt">{project.node.excerpt}</p>
                    </div>
                    <ul className="content-links resetList">
                      <li className="content-linkItem">
                      {project.node.frontmatter.gitHubLink ?
                        <a href={project.node.frontmatter.gitHubLink}
                          alt="Link to github"
                          target="_blank"
                          rel="noopener noreferrer">GITHUB</a>
                      : <strike>GITHUB SITE</strike>
                      }
                      </li>
                      <span className="separator">-</span>
                      <li className="content-linkItem">
                      {project.node.frontmatter.liveLink ?
                        <a href={project.node.frontmatter.liveLink}
                          alt="Link to live site"
                          target="_blank"
                          rel="noopener noreferrer">LIVE SITE</a>
                      : <strike>LIVE SITE</strike>
                      }
                      </li>
                    </ul>
                  </div>
                </li>
              ))
            )}
          />
        </ul>
      </div>
    </div>
  )
}

export default Portfolio