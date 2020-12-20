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
  let lang

  useEffect(() => {
    if (typeof window !== `undefined`) {
      lang = window.location.href.includes("se") ? 0 : 1 // SET LANGUAGE (0 = SWEDISH, 1 = ENGLISH)
    } else {
      lang = 1
    }

    AOS.init({
      duration: 700
    })
  }, [])

  return (
    <div>
      <Layout
        data={data.wpgraphql.menus.edges}
        footerData={data.wpgraphql.pages.edges[lang].node.footer}
        language={lang}>
        <Hero
          data={data.wpgraphql.pages.edges[lang].node.header}/>
        <Intro
          data={data.wpgraphql.pages.edges[lang].node.intro}/>
        <Portfolio
          data={data.wpgraphql.pages.edges[lang].node.projects}
          projects={data.wpgraphql.projects.nodes}/>
        <Resume
          data={data.wpgraphql.pages.edges[lang].node.resume}/>
        <Quote
          data={data.wpgraphql.pages.edges[lang].node.quote}/>
        <Form
          data={data.wpgraphql.pages.edges[lang].node.form}/>
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
            technologiesUsed
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