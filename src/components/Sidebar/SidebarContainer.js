import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { logout } from '../../actions/auth/users'
import { connect } from 'react-redux'
import User from '../User/UserContainer'
import { getUser } from '../../actions/auth/users'

import { Avatar, Pill, Tablist, Heading, SidebarTab, TabNavigation } from 'evergreen-ui'

class SidebarContainer extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.getUser(this.props.user.id)
    }
  }

  handleSubmit = () => {
		this.props.logout()
  }
  
  render() {
    if (!this.props.currentUser) return null
    return (
      <div className='sidebar-container'>
        <div className='sidebar-logo'>
            <Heading color='white' size={800}>Grozeries CMS</Heading>
        </div>
        <div className='sidebar-username'>
          <Avatar 
            isSolid color="green" 
            name={this.props.user.first_name + ' ' + this.props.user.last_name} 
            size={40} />
          <User 
            onSubmit={this.props.logout} 
            details={this.props.user}/>
        </div>

        <TabNavigation marginX={10} marginBottom={16}>
          <Tablist marginBottom={16} flexBasis={240} marginRight={0}>
            <Link to='/shops'>
              <SidebarTab>   
                Your shop</SidebarTab></Link>
            <Link to='/products'>
              <SidebarTab> 
                Products</SidebarTab></Link>
            <Link to='/products/create'>
              <SidebarTab>   
                Add products</SidebarTab></Link>
            <Link to='/orders'>
              <SidebarTab>  
                Orders<Pill color="red" display="inline-flex" margin={8}>4</Pill></SidebarTab></Link>
          </Tablist>
        </TabNavigation>

        {/* <div className='sidebar-items'>
                <Link to='/shops'><Icon icon="shop" color="muted" marginRight={16} /><h4>shops</h4></Link>
                <Link to='/products'><Icon icon="barcode" color="muted" marginRight={16} /><h4>products</h4></Link>
                <Link to='/products/create'><Icon icon="add" color="muted" marginRight={16} /><h4>add products</h4></Link>
                <Link to='/orders'><Icon icon="box" color="muted" marginRight={16} /><h4>orders</h4></Link>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    user: state.user
	}
}

export default connect(mapStateToProps, { logout, getUser })(SidebarContainer)