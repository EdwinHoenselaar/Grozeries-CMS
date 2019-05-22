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
    image: '',
    isShown: false,
    allergenCollector: {}
  })

  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    try {this.submitAllergens() } 
    catch(error){console.log(error)}
    this.props.createProduct(this.props.shop.id, this.state)
  }

  setUrl = (url) => {
    this.setState({...this.state, image: url})
  }

  showSideSheet = (event) => {
    this.setState({ isShown: true })
  }

  closeSideSheet = (event) => {
    this.setState({ isShown: false })
  }

  checkAllergen = (checked, allergen) => {
    console.log('cA-Fn: ',checked, allergen)
    this.setState({ allergenCollector : { ...this.state.allergenCollector, [allergen] : checked }})
  }

  submitAllergens = () => {
    let allergy = []
    for (let i = 0; i < Object.keys(this.state.allergenCollector).length; i++) {
      if (Object.values(this.state.allergenCollector)[i] === true) {
        allergy.push(Object.keys(this.state.allergenCollector)[i])
      }
    }
    let databaseFormatter = allergy.join(', ').toString()
    this.setState({ allergens : databaseFormatter })
  }

  render() {
    const productDetailPage = 
      <ProductDetailPage 
        checkAllergen={this.checkAllergen}
        isShown={this.state.isShown}
        showSideSheet={this.showSideSheet}
        closeSideSheet={this.closeSideSheet}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        setUrl={this.setUrl}
        values={this.state}
      />

    return (
      <div className='products page'>
        {productDetailPage}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shop: state.shop && state.shop
})

export default connect(mapStateToProps, { createProduct })(CreateProductContainer)