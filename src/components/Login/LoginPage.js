import React, { Component } from 'react'
import { Button, TextInputField } from 'evergreen-ui'
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

          <TextInputField
            label="Email"
            name="email"
            description="Enter your email adress."
            placeholder="info@grozeries.nl"
            value={ this.state.email || '' }
            onChange={ this.handleChange }
          />

          <TextInputField
            label="Password"
            type='password'
            name="password"
            description="Enter your password."
            placeholder="secretpassword"
            value={ this.state.password || '' }
            onChange={ this.handleChange }
          />

  				<Button appearance="primary" type="submit">Login</Button>
  			</form>
		  </div>
    )
  }
}
