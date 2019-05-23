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
    allergenCollector: {},
    allergensCollected: false
  })

    //objectify the string with allergens
    setAllergens() {
      const allergens = this.state.allergens
  
      const table =
      allergens.split(', ') 
        .map(pair => pair.split(':'));
  
      const result = {};
      table.forEach(([key]) => result[key] = true);
  
      this.setState({ ...this.state.allergenCollector, allergenCollector : result })
      this.setState({ allergensCollected: true })
    }
    //

  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const newProduct = {
      product_name: this.state.product_name,
      description: this.state.description,
      price: this.state.price,
      ingredients: this.state.ingredients,
      allergens: this.state.allergens,
      prices_by: this.state.prices_by,
      quantity: this.state.quantity,
      in_stock: this.state.in_stock,
      image: this.state.image
    }
    this.props.createProduct(this.props.shop.id, newProduct)
  }

  setUrl = (url) => {
    this.setState({...this.state, image: url})
  }

  showSideSheet = (event) => {
    event.preventDefault()
    if (!this.state.allergensCollected) this.setAllergens();
    this.setState({ isShown: true })
  }

  closeSideSheet = (event) => {
    try {this.submitAllergens() } 
    catch(error){console.log(error)}
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
        allergenCollector={this.state.allergenCollector}
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
  shop: state.shop && state.shop,
  user: state.user && state.user
})

export default connect(mapStateToProps, { createProduct })(CreateProductContainer)