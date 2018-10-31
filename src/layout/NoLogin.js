import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import './NoLogin.less'

import { Switch, Route } from 'react-router-dom'
class NoLogin extends Component {
  
  render() {
    const { match } = this.props
    console.log(match)
    return (
      <div className="noLogin">
        <Switch>
          <Route path='/sign/up' component={SignUp}></Route>
          <Route path='/sign/in' component={Login}></Route>
        </Switch>
        <SignUp></SignUp>
        <Login></Login>
      </div>
    )
  }
}
export default NoLogin
