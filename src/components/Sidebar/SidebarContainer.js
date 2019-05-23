import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { logout } from '../../actions/auth/users'
import { connect } from 'react-redux'
import User from '../User/UserContainer'
import { getUser } from '../../actions/auth/users'
import { getShopProducts } from '../../actions/products/getShopProducts'

import { Avatar, Pill, Tablist, Heading, SidebarTab, IconButton, TabNavigation, Text, toaster } from 'evergreen-ui'

class SidebarContainer extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getUser(this.props.currentUser.id)
    }
  }

  componentWillUpdate(nextProps, nextState) {
    nextProps.user &&
      this.props.getShopProducts(nextProps.user.shopId)
    
  }

  handleSubmit = () => {
    this.props.logout()
    toaster.notify('Logged out succesfully.')
  }
  
  render() {
    if (!this.props.currentUser) return null

    const avatar =
      this.props.user &&
        <div className='sidebar-username'>
          <Avatar 
            isSolid color="green" 
            name={this.props.user.first_name + ' ' + this.props.user.last_name} 
            size={40} />
          <User 
            onSubmit={this.props.logout} 
            details={this.props.user}/>
        </div>


    return (
      <div className='sidebar-container'>
         <div className='sidebar-logo'>
            <Heading color='white' size={900}>Grozeries</Heading>
            <Text color='white' size={400}>Content Management</Text>
        </div>
        {avatar}
        <TabNavigation marginX={10} marginBottom={16}>
          <Tablist marginBottom={16} flexBasis={240} marginRight={0}>
            <Link to='/shops'>
              <SidebarTab>   
                Your shop</SidebarTab></Link>
            <Link to='/products'>
              <SidebarTab> 
                Products</SidebarTab></Link>
            <Link to='/product/create'>
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
    user: state.user
	}
}

export default connect(mapStateToProps, { logout, getUser, getShopProducts })(SidebarContainer)