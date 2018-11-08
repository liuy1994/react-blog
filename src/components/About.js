import React, { Component } from 'react'
import { Button } from 'antd'
import './About.less'
import {docCookies} from '../utils'
import request from '../services/request'
class Main extends Component {
  logout() {
    request.logout().then(() => {
      docCookies.removeItem('max_blog')
      window.location.href = '/#/sign/in'
    })
  }
  render() {
    return (
      <div className="content-about">
        <Button type="primary" onClick={this.logout.bind(this)}>注销</Button>
      </div>
    )
  }
}
export default Main