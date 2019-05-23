import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrdersPage from './OrdersPage'
import { getShopOrders } from '../../actions/orders/getShopOrders'


class OrdersContainer extends Component {

  componentWillUpdate() {
    this.props.user &&
    !this.props.orders &&
    this.props.getShopOrders(this.props.user.shopId)
  }

  render() {
    const ordersPage =
      this.props.orders &&
      <OrdersPage orders={this.props.orders}/>

    return (
        <div className='orders'>
          {ordersPage}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  shop: state.shop,
  orders: state.orders,
  user: state.user
})

export default connect(mapStateToProps, { getShopOrders })(OrdersContainer)