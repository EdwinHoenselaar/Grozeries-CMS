import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrdersPage from './OrdersPage'
import { getShopOrders } from '../../actions/orders/getShopOrders'


class OrdersContainer extends Component {
  
  componentDidMount() {
    this.props.getShopOrders(1)
    console.log('%cGET ORDERS', 'background: blue; color: white; font-size: 40px;')
  }

  render() {
    console.log('%cOrders Container','background-color: red; color: white;', this.props)
    return (
        <div className='orders'>
            {/* <OrdersPage orders={this.props.orders}/> */}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  shop: state.shop,
  orders: state.orders
})

export default connect(mapStateToProps, { getShopOrders })(OrdersContainer)