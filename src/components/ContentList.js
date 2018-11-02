import React, { Component } from 'react'
import './ContentList.less'
import request from '../services/request'
import { List, Button } from 'antd'
import { Link } from 'react-router-dom'
class ContentList extends Component {
  constructor() {
    super()
    this.state = {
      contentList: []
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.getList(nextProps.match.params)
  }
  
  componentDidMount() {
    this.getList(this.props.match.params)
  }
  getList(params) {
    request.getContentList(params.id).then(data => {
      this.setState({
        contentList: data.list
      })
    })
  }
  render() {
    let { contentList } = this.state
    return (
      <div className="content-list">
        <h3><Link to="/add"><Button size="small" type="primary">新增文章</Button></Link></h3>
        <List
          bordered={true}
          dataSource={contentList}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={<Link to={`detail/${item.id}`}>{item.name}</Link>}
                description={item.brief}
              />
              <Link to={`/edit/${item.id}`}><Button type="primary">编辑</Button></Link>
              <Button type="danger">删除</Button>
            </List.Item>
          )}
        ></List>
      </div>
    )
  }
}
export default ContentList