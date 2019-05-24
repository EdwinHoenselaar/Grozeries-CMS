import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrdersPage from './OrdersPage'
import { getShopOrders } from '../../actions/orders/getShopOrders'
import { updateOrderline } from '../../actions/orders/updateOrderline'


class OrdersContainer extends Component {

  componentWillUpdate() {
    this.props.user &&
    !this.props.orders &&
    this.props.getShopOrders(this.props.user.shopId)
  }

  onClick= () => {
    window.location.reload()
  }

  state = ({
    orders: null
  })

  onChange = (event) => {
    event.preventDefault()
    const statusUpdate = {status: event.target.value}
    this.props.updateOrderline(event.target.name, statusUpdate)
  }

  render() {
    const ordersPage =
      this.props.orders &&
      <OrdersPage 
        orders={this.props.orders} 
        onClick={this.onClick}
        onChange={this.onChange}
        value={this.state.orders}
      />

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

export default connect(mapStateToProps, { getShopOrders, updateOrderline })(OrdersContainer)