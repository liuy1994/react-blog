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
          <Route exact path='/sign/up' component={SignUp}></Route>
          <Route exact path='/sign/in' component={Login}></Route>
        </Switch>
        <SignUp></SignUp>
        <Login></Login>
      </div>
    )
  }
}
export default NoLogin
