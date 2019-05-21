import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/auth/users'
import { connect } from 'react-redux'
import User from '../User/UserContainer'

import { Avatar, Pill, Tablist, Heading, SidebarTab, IconButton, TabNavigation, Text, toaster } from 'evergreen-ui'

class SidebarContainer extends Component {

  handleSubmit = () => {
    this.props.logout()
    toaster.notify('Logged out succesfully.')
  }
  
  render() {
    if (!this.props.currentUser) return ''
    return (
      <div className='sidebar-container'>
        <div className='sidebar-logo'>
            <Heading color='white' size={900}>Grozeries</Heading>
            <Text color='white' size={400}>Content Management</Text>
        </div>
        <div className='sidebar-username'>
          {(this.props.currentUser.first_name !== undefined) ? <Avatar 
            isSolid color="green" 
            name={this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name} 
            size={40} /> : ' '}
          <User 
            onSubmit={this.props.logout} 
            details={this.props.currentUser}/>
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

        <IconButton onClick={this.handleSubmit} marginLeft={16} icon="log-out"/>
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