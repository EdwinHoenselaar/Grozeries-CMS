import React, { Component } from 'react'

export default class LoginPage extends Component {

    state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="login-form">
  			<form className='login-form' onSubmit={this.handleSubmit}>

  				<label className='login-label'>
                    Email
                </label>
                <input className='login-input' type="email" name="email" value={
                                this.state.email || ''
                            } onChange={ this.handleChange } />

  				<label className='login-label'>
                    Password
                </label>
                <input className='login-input' type="password" name="password" value={
                                this.state.password || ''
                            } onChange={ this.handleChange } />

  				<button className='login-button' type="submit">Login</button>
  			</form>
		  </div>
    )
  }
}
