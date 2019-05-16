import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/auth/users'
import { connect } from 'react-redux'
import User from '../User/UserContainer'

class SidebarContainer extends Component {

  handleSubmit = () => {
		this.props.logout()
  }
  
  render() {
    if (!this.props.currentUser) return ''
    return (
      <div className='sidebar-container'>
        <div className='sidebar-logo'>
            <h1>Grozeries CMS</h1>
        </div>
        <div className='sidebar-username'>
            <User onSubmit={this.props.logout} details={this.props.currentUser}/>
        </div>
        <div className='sidebar-items'>
                <Link to='/store'><h4>store</h4></Link>
                <Link to='/products'><h4>products</h4></Link>
                <Link to='/orders'><h4>orders</h4></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
	}
}

export default connect(mapStateToProps, { logout })(SidebarContainer)