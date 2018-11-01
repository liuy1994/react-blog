import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import './NoLogin.less'

import { Switch, Route, Link, Redirect } from 'react-router-dom'
class NoLogin extends Component {
  
  render() {
    const { match } = this.props
    
    return (
      <div className="noLogin">
        <Link to="/sign/up">sign up</Link>
        <Link to="/sign/in">sign in</Link>
        <Switch>
          <Route path={`${match.path}`} component={Login}></Route>
          <Route path={`${match.path}/up`} component={SignUp}></Route>
        </Switch>
        {/* <SignUp></SignUp> */}
        {/* <Login></Login> */}
      </div>
    )
  }
}
export default NoLogin
