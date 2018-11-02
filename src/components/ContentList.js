import React, { Component } from 'react'
import './ContentList.less'
import request from '../services/request'
class ContentList extends Component {
  constructor() {
    super()
    this.state = {
      contentList: []
    }
  }
  componentDidMount() {
    this.getList()
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
  render() {
    let { contentList } = this.state
    return (
      <div className="content-list">
        <h3>文章列表</h3>
        <ul>{contentList}</ul>
      </div>
    )
  }
}
export default ContentList