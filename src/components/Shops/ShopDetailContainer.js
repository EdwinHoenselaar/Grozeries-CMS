import React, { Component } from 'react'
import { getShopProducts } from '../../actions/products/getShopProducts'
import { connect } from 'react-redux'
import ShopDetailPage from './ShopDetailPage'
import './ShopDetail.css'

class ShopDetailContainer extends Component {
  
  render() {
    const shopDetailPage = 
    this.props.shop &&
    <ShopDetailPage shop={this.props.shop} />
    console.log('test', this.props)
    
    return (
      <div className="page products">
        {shopDetailPage}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shop: state.shop,
  user: state.user
})

export default connect(mapStateToProps, { getShopProducts })(ShopDetailContainer)
