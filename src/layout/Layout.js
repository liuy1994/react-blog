import React, {Component} from 'react'
import Header from './Header'
import Content from './Content'
import NoLogin from './NoLogin'
import Footer from './Footer'
import './Layout.less'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header></Header>
        <Content></Content>
        <NoLogin></NoLogin>
        <Footer></Footer>
      </div>
    )
  }
}
export default Layout