import React, { Component } from 'react'
import ProductDetailPage from './ProductsDetailPage'

export default class CreateProductContainer extends Component {
  render() {
    const productDetailPage = 
      <ProductDetailPage 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state.product}/>
    return (
      <div>
        {productDetailPage}
      </div>
    )
  }
}
