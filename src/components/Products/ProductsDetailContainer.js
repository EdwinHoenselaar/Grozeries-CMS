import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProduct } from '../../actions/products/getProduct'
import { setUpdateProduct } from '../../actions/products/setUpdateProduct'
import ProductDetailPage from './ProductsDetailPage'

class ProductsDetailContainer extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  //objectify the string with allergens
  setAllergens() {
    const allergens = this.state.product.allergens

    const table =
    allergens.split(', ') 
      .map(pair => pair.split(':'));

    const result = {};
    table.forEach(([key]) => result[key] = true);

    this.setState({ ...this.state.allergenCollector, allergenCollector : result })
    this.setState({ allergensCollected: true })
  }
  //

  state = ({
    product: null,
    isShown: false,
    allergenCollector: {},
    allergensCollected: false
  })

  static getDerivedStateFromProps(props, state) {
    return {
      product: {
        ...props.product,
        ...(state.product || {})
      }
    }
  }

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
    this.props.setUpdateProduct(this.state.product)
  }

  setUrl = (url) => {
    this.setState({product : { image : url} })
  }

  showSideSheet = (event) => {
    event.preventDefault()
    if (!this.state.allergensCollected) this.setAllergens();
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
    //commented out for dev purposes
    //if (!this.props.currentUser) return <Redirect to='/' />

    const productDetailPage = 
      this.props.product &&
      <ProductDetailPage 
        checkAllergen={this.checkAllergen}
        isShown={this.state.isShown}
        showSideSheet={this.showSideSheet}
        closeSideSheet={this.closeSideSheet}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        setUrl={this.setUrl}
        allergenCollector={this.state.allergenCollector}
        values={this.state.product}/>

    return (
      <div className="products page">
        {productDetailPage}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product
})

export default connect(mapStateToProps, { getProduct, setUpdateProduct })(ProductsDetailContainer)
