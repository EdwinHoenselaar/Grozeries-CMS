import React, { Component } from 'react'
import OrdersPage from './OrdersPage'

export default class OrdersContainer extends Component {
  state = ({
    orders: [
      {
        orderId: 1,
        customer: 'Henk',
        totalPrice: 50,
        orderlines: []
      },
      {
        orderId: 2,
        customer: 'Frank',
        totalPrice: 60,
        orderlines: []
      },
      {
        orderId: 3,
        customer: 'Henk',
        totalPrice: 70,
        orderlines: []
      },
      {
        orderId: 4,
        customer: 'Frank',
        totalPrice: 40,
        orderlines: []
      },
      {
        orderId: 5,
        customer: 'Henk',
        totalPrice: 35,
        orderlines: []
      },
      {
        orderId: 6,
        customer: 'Frank',
        totalPrice: 45,
        orderlines: []
      },
    ]
  })
  render() {
    return (
        <div className='orders'>
            <OrdersPage orders={this.state.orders}/>
        </div>
    )
  }
}
