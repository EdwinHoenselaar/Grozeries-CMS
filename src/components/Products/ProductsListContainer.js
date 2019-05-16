import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product';
import Legend from './Legend'

export default class ProductsListContainer extends Component {
  render() {

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
