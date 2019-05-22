import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getShops } from '../../actions/shops/getShops'
import ShopsPage from './ShopsPage';

class ShopsContainer extends Component {
  componentDidUpdate() {
    this.props.user &&
    !this.props.shop &&
    this.props.getShopProducts(this.props.user.shopId)
  }

  render() {
    const storePage = 
      this.props.shops &&
      <ShopsPage shops={this.props.shops} />

    return (
      <div className='store'>
        {storePage}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  shops: state.shops
})

export default connect(mapStateToProps, { getShops })(ShopsContainer)
