import React, { Component } from 'react'
import './Main.less'
import ContentEdit from './ContentEdit'
import ContentList from './ContentList'
import ContentItem from './ContentItem'
import { Switch, Route, Redirect } from 'react-router-dom'
class Main extends Component {
  showContentList() {
    console.log('add success')
  }
  render() {
    const { routePath } = this.props
    return (
      <div className="content-main">
        {/* <Link to="/">list&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to="/add">add&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to="/edit/344">edit&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to="/detail">detail&nbsp;&nbsp;&nbsp;&nbsp;</Link> */}
        <Switch>
          <Redirect exact path="/" to={{ pathname: '/list' }} />
          <Route path={`${routePath.path}list/:id?`} component={ContentList}></Route>
          <Route path={`${routePath.path}add`} component={ContentEdit}></Route>
          <Route path={`${routePath.path}edit/:id`} component={ContentEdit}></Route>
          <Route path={`${routePath.path}detail`} component={ContentItem}></Route>
        </Switch>
      </div>
    )
  }
}
export default Main