import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../../actions/products/getProduct'
import ProductDetailPage from './ProductsDetailPage'

class ProductsDetailContainer extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }
  render() {
    const productDetailPage = 
      this.props.product &&
      <ProductDetailPage />
    return (
      <div className='products'>
        {productDetailPage}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product
})

export default connect(mapStateToProps, { getProduct })(ProductsDetailContainer)
