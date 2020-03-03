import React, { useEffect } from 'react';
import './index.scss'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import Intro from '../components/intro/intro'
import Portfolio from '../components/portfolio/portfolio'
import Resume from '../components/resume/resume'
import Quote from '../components/quote/quote'
import Form from '../components/form/form'
import Footer from '../components/footer/footer'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'

export default () => {
  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])

  return (
    <div>
      <Layout>
        <Hero />
        <Intro />
        <Portfolio />
        <Resume />
        <Quote />
        <Form />
        <Footer />
      </Layout>
    </div>
  )
}