import React, {Component} from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './Layout.css'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    )
  }
}
export default Layout