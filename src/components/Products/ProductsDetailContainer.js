import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class ProductsDetailContainer extends Component {
  render() {
    if (!this.props.currentUser) return <Redirect to='/' />
    return (
      <div className='products'>
        <h1>detail container</h1>
      </div>
    )
  }
}
