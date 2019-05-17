import React, { Component } from 'react'
import ProductDetailPage from './ProductsDetailPage'
import { createProduct } from '../../actions/products/createProduct'
import { connect } from 'react-redux'

class CreateProductContainer extends Component {
  state = ({
    product: {
      product_name: '',
      description: '',
      price: '',
      ingredients: '',
      allergens: '',
      prices_by: '',
      quantity: '',
      in_stock: ''
    }
  })

  onChange = (event) => {
    this.setState({
      product: {
        ...this.state.product,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createProduct(this.state.product)
  }


  render() {
    const productDetailPage = 
      <ProductDetailPage 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state.product}
      />

    return (
      <div>
        {productDetailPage}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shop: state.shop && state.shop
})

export default connect(mapStateToProps, { createProduct })(CreateProductContainer)