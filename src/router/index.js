import React, { Component } from 'react'
import { Router, Route, Link} from 'react-router'
import App from '../App'

class BlogRouter extends Component{
  render() {
    return (
      <Router history={true}>
        <Route path="/" component={App} />
      </Router>
    )
  }
}

export default BlogRouter