import React, { Component } from 'react'
import ProductDetailPage from './ProductsDetailPage'
import { createProduct } from '../../actions/products/createProduct'
import { connect } from 'react-redux'

class CreateProductContainer extends Component {
  state = ({
    product_name: '',
    description: '',
    price: '',
    ingredients: '',
    allergens: '',
    prices_by: '',
    quantity: '',
    in_stock: '',
    image: ''   
  })

  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createProduct(this.state)
  }

  setUrl = (url) => {
    this.setState({...this.state, image: url})
  }

  render() {
    const productDetailPage = 
      <ProductDetailPage 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        setUrl={this.setUrl}
        values={this.state}
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