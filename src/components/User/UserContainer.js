import React, { Component } from 'react'
import { toaster } from 'evergreen-ui'

export default class UserContainer extends Component {

	handleSubmit = () => {
    this.props.onSubmit()
    toaster.notify('Logged out succesfully.')
	}


  render() {
    console.log('userC: ',this.props)
    return (
      <>
        <p className='user-name'>{this.props.details.first_name} {this.props.details.last_name}</p>
        <p onClick={this.handleSubmit} className='user-logout'>log out</p>
      </>
    )
  }
}