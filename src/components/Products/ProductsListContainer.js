import React, { Component } from 'react'
import Product from './Product';
import Legend from './Legend'

export default class ProductsListContainer extends Component {
  render() {
    return (
      <div className='products page'>
        <Legend />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    )
  }
}
