import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import User from '../User/UserContainer'

export default class SidebarContainer extends Component {
  render() {
    return (
      <div className='sidebar-container'>
        <div className='sidebar-logo'>
            <h1>Grozeries CMS</h1>
        </div>
        <div className='sidebar-items'>
                <Link to='/shops'><h4>shops</h4></Link>
                <Link to='/products'><h4>products</h4></Link>
                <Link to='/orders'><h4>orders</h4></Link>
        </div>
        <div className='sidebar-username'>
            <User />
        </div>
      </div>
    )
  }
}
