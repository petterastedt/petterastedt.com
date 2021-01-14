import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

const Layout = ({ data, language, footerData, children }) => (
  <div className="layout">
    <Helmet>
      <title>Petter Åstedt - Frontend Web Developer</title>
      <meta name="title" content="Petter Åstedt - Web Developer" />
      <meta name="description" content="Hi, I’m Petter! I’m a Swedish web developer based in Berlin. Here you can find some more info about me and what I do." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.petterastedt.com/" />
      <meta property="og:title" content="Petter Åstedt - Web Developer" />
      <meta property="og:description" content="Hi, I’m Petter! I’m a Swedish web developer based in Berlin. Here you can find some more info about me and what I do." />
    </Helmet>
    <Navbar
      data={data}
      language={language}/>

    {children}

    <Footer
      data={data}
      footerData={footerData}/>
  </div>
)

export default Layout