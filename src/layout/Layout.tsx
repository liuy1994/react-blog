import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
export default Layout
