import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductsListPage from './ProductsListPage'
import { getShopProducts } from '../../actions/products/getShopProducts'

class ProductsListContainer extends Component {

  state = { isShown: false }

  componentDidUpdate() {
    this.props.user &&
    !this.props.shop &&
    this.props.getShopProducts(this.props.user.shopId)
  }
  
  deleteButton() {
    this.setState({ isShown: true })
  }
  
  render() {
    // if (!this.props.currentUser) return <Redirect to='/' />

    const productsListPage = 
      this.props.shop &&
      <ProductsListPage onDelete={this.deleteButton} products={this.props.shop.products}/>

    return (
      <div className='products page'>
        {productsListPage}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  shop: state.shop,
  user: state.user
})

export default connect(mapStateToProps, { getShopProducts })(ProductsListContainer)