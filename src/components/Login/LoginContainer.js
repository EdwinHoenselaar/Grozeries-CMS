import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/auth/users'

import LoginPage from './LoginPage'

class LoginContainer extends Component {
  
  handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

  render() {
    return (
      <div className='login page'>
        <h1>login</h1>

        <LoginPage onSubmit={this.handleSubmit} />

        { this.props.error && 
          <span style={{color:'red'}}>{this.props.error}</span> }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
        error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginContainer)