import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../navbar/navbar'

const Layout = ({ children }) => (
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
    <Navbar />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout