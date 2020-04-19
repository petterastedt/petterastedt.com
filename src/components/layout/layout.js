import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

const Layout = props => {
  return (
    <div className="layout">
      <Helmet
        title='Petter Åstedt - Frontend web developer'
        meta={[
          {
            name: 'description',
            content: 'Petter Åstedt official website',
          },
          { name: 'keywords', content: 'Web developer, Petter Åstedt, Portfolio,' },
        ]}
      />
      <Navbar
        data={props.data}/>

      {props.children}

      <Footer
        data={props.data}
        footerData={props.footerData}/>
    </div>
  )
}

export default Layout