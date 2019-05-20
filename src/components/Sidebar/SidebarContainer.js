import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/auth/users'
import { connect } from 'react-redux'
import User from '../User/UserContainer'

import { Icon } from "@blueprintjs/core";

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
                <Link to='/shops'><Icon icon="shop" color="muted" marginRight={16} /><h4>shops</h4></Link>
                <Link to='/products'><Icon icon="barcode" color="muted" marginRight={16} /><h4>products</h4></Link>
                <Link to='/products/create'><Icon icon="add" color="muted" marginRight={16} /><h4>add products</h4></Link>
                <Link to='/orders'><Icon icon="box" color="muted" marginRight={16} /><h4>orders</h4></Link>
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