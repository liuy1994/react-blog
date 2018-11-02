import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import './NoLogin.less'

import { Switch, Route } from 'react-router-dom'
class NoLogin extends Component {
  
  render() {
    const { match } = this.props
    return (
      <div className="noLogin">
        <Switch>
          <Route path={`${match.path}`} component={Login}></Route>
          <Route path={`${match.path}/up`} component={SignUp}></Route>
        </Switch>
      </div>
    )
  }
}
export default NoLogin
