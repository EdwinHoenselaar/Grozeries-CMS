import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductsListPage from './ProductsListPage'
import { getShopProducts } from '../../actions/products/getShopProducts'

class ProductsListContainer extends Component {

  componentDidMount() {
    this.props.getShopProducts(4)
    console.log(localStorage.currentUserJwt)
  }
  render() {
    if (!this.props.currentUser) return <Redirect to='/' />
      
    const productsListPage = 
      this.props.shop &&
      <ProductsListPage products={this.props.shop.products}/>

    return (
      <div className='products page'>
        {productsListPage}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  shop: state.shop
})

export default connect(mapStateToProps, { getShopProducts })(ProductsListContainer)