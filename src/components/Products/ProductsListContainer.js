import React, { Component } from 'react'
import { connect } from 'react-redux'
import Legend from './Legend'
import ProductsListPage from './ProductsListPage'
import { getShopProducts } from '../../actions/products/getShopProducts'

class ProductsListContainer extends Component {
  componentDidMount() {
    this.props.getShopProducts(4)
  }
  render() {
    const productsListPage = 
      this.props.shop &&
      <ProductsListPage products={this.props.shop.products}/>
    return (
      <div className='products page'>
        <Legend />
        {productsListPage}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shop: state.shop
})

export default connect(mapStateToProps, { getShopProducts })(ProductsListContainer)