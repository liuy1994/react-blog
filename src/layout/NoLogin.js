import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import './NoLogin.less'

import { Switch, Route, Redirect } from 'react-router-dom'
class NoLogin extends Component {
  
  render() {
    const { match } = this.props
    console.log(match)
    return (
      <div className="noLogin">
        <Switch>
          <Redirect exact path="/" to={{ pathname: '/in' }} />
          <Route path={`${match.path}/in`} component={Login}></Route>
          <Route path={`${match.path}/up`} component={SignUp}></Route>
        </Switch>
      </div>
    )
  }
}
export default NoLogin
