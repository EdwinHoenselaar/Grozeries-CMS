import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductsListPage from './ProductsListPage'
import { getShopProducts } from '../../actions/products/getShopProducts'

class ProductsListContainer extends Component {

  state = { isShown: false }

  componentDidMount() {
    this.props.getShopProducts(4)
    console.log('%cSTAR WARS: THE EMPIRE STRIKES BACK.', 'background: #222; color: #bada55; font-size: 40px;')
  }
  
  deleteButton() {
    this.setState({ isShown: true })
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
  shop: state.shop
})

export default connect(mapStateToProps, { getShopProducts })(ProductsListContainer)