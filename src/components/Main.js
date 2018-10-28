import React, { Component } from 'react'
import './Main.less'
import request from '../services/request'
import MainAdd from './MainAdd'
class Main extends Component {
  constructor() {
    super()
    this.state = {
      contentList: [],
      detail: null
    }
  }
  componentDidMount() {
    this.getList()
    this.getDetail(1)
  }
  getList() {
    request.getContentList().then(data => {
      this.setState({
        contentList: data.list.map(t => {
          return <li key={t.id}>{t.name}</li>
        })
      })
    })
  }
  getDetail(id) {
    request.getContentDetail(id).then(data => {
      this.setState({
        detail: data
      })
    })
  }
  render() {
    let { contentList, detail } = this.state
    return (
      <div className="content-main">
        <h3>列表</h3> 
        <ul>{contentList}</ul>
        <h3>详情</h3>
        <div>{detail && detail.name}</div>
        <h3>新增博文</h3>
        <MainAdd getlist={this.getList.bind(this)}></MainAdd>
      </div>
    )
  }
}
export default Main