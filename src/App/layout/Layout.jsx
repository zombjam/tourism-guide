import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => (
  <Fragment>
    <Header></Header>
    <div className='h-full pb-16'>{children}</div>
    <Footer></Footer>
  </Fragment>
)

export default Layout
