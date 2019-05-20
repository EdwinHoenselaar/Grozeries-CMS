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
  state = ({
    product: null
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

  render() {
    //commented out for dev purposes
    //if (!this.props.currentUser) return <Redirect to='/' />

    const productDetailPage = 
      this.props.product &&
      <ProductDetailPage 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        setUrl={this.setUrl}
        values={this.state.product}/>

    return (
      <>
        {productDetailPage}
      </>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product
})

export default connect(mapStateToProps, { getProduct, setUpdateProduct })(ProductsDetailContainer)
