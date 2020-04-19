import React, { useEffect } from 'react';
import { graphql } from 'gatsby'
import './index.scss'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import Intro from '../components/intro/intro'
import Portfolio from '../components/portfolio/portfolio'
import Resume from '../components/resume/resume'
import Quote from '../components/quote/quote'
import Form from '../components/form/form'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'

export default ({data}) => {
  useEffect(() => {
    AOS.init({
      duration: 700
    })
  }, [])

  return (
    <div>
      <Layout
        data={data.wpgraphql.menus.edges}
        footerData={data.wpgraphql.pages.edges[0].node.footer}>
        <Hero
          data={data.wpgraphql.pages.edges[0].node.header}/>
        <Intro
          data={data.wpgraphql.pages.edges[0].node.intro}/>
        <Portfolio
          data={data.wpgraphql.pages.edges[0].node.projects}
          projects={data.wpgraphql.projects.nodes}/>
        <Resume
          data={data.wpgraphql.pages.edges[0].node.resume}/>
        <Quote
          data={data.wpgraphql.pages.edges[0].node.quote}/>
        <Form
          data={data.wpgraphql.pages.edges[0].node.form}/>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      pages {
        edges {
          node {
            intro {
              introText
              introImage {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 250, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            header {
              hideBackgroundImage
              buttonText
              headerWysiwyg
              headerLower
              separator
            }
            projects {
              projectsIntro
              technologyBadges
            }
            resume {
              downloadLabel
              resumeIntro
              image {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 235, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              pdf {
                mediaItemUrl
                mimeType
              }
            }
            quote {
              hideText
              quote
              quoteHiddenText
              quoteSecondField
              quoteAuthor
            }
            form {
              buttonLabel
              email
              formTitle
              message
              placeholder
              subject
            }
            footer {
              footerSubtitle
            }
          }
        }
      }
      projects {
        nodes {
          project {
            previewImage {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
            githubLink
            liveLink
            title
          }
        }
      }
      menus {
        edges {
          node {
            name
            menuItems {
              edges {
                node {
                  label
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`