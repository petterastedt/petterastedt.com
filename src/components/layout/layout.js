import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

const Layout = ({ data, language, footerData, children }) => (
  <div className="layout">
    <Helmet
      title='Petter Åstedt - Frontend Web Developer'
      meta={[
        {
          name: 'description',
          content: 'Petter Åstedt Portfolio Website',
        },
        { name: 'keywords', content: 'Web developer, Petter Åstedt, Portfolio,' },
      ]}
    />
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