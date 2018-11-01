import React, {Component} from 'react'
import Header from './Header'
import Content from './Content'
import NoLogin from './NoLogin'
import Footer from './Footer'
import NotFound from './NotFound'

import Login from './Login'
import SignUp from './SignUp'
import './Layout.less'
import { Switch, Route, Link} from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header></Header>
        <Link to="/">Home</Link>
        <Link to="/sign">sign</Link>
        <Switch>
          <Route exact path='/' component={Content}></Route>
          <Route path='/sign' component={NoLogin}></Route>
          <Route path='*' component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}
export default Layout