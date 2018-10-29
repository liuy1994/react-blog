import React, { Component } from 'react'
// import Login from './Login'
import SignUp from './SignUp'
import './NoLogin.less'
class NoLogin extends Component {
  render() {
    return (
      <div class="noLogin">
        <SignUp></SignUp>
      </div>
    )
  }
}
export default NoLogin
