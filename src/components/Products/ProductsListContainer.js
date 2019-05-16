import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Product from './Product';
import Legend from './Legend'

class ProductsListContainer extends Component {

  render() {
    console.log('currentUser PLC ',this.props.currentUser)
    if (!this.props.currentUser) return <Redirect to='/' />

    // temporary
    const id = 1

    return (
      <div className='products page'>
        <Legend />
        <Link to={`/products/${id}`}><Product /></Link>
        <Link to={`/products/${id}`}><Product /></Link>
        <Link to={`/products/${id}`}><Product /></Link>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
	}
}

export default connect(mapStateToProps)(ProductsListContainer)