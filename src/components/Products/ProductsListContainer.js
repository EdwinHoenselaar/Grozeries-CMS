import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductsListPage from './ProductsListPage'
import { getUser } from '../../actions/auth/users'
import { getShopProducts } from '../../actions/products/getShopProducts'

class ProductsListContainer extends Component {

  state = { isShown: false }
  
  deleteButton() {
    this.setState({ isShown: true })
  }

  componentDidMount() {
    this.props.currentUser &&
      !this.props.user &&
      this.props.getUser(this.props.currentUser.id)
  }  
  
  render() {
    if (!this.props.currentUser) return <Redirect to='/' />

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

export default connect(mapStateToProps, { getShopProducts, getUser })(ProductsListContainer)