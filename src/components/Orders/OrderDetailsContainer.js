import React, { Component } from 'react'
import OrderDetailsPage from './OrderDetailsPage'

export default class OrderDetailsContainer extends Component {

  state = ({
    orders: [
      {
        orderId: 1,
        customer: 'Henk',
        totalPrice: 50,
        orderlines: [{
          id: 1,
          product: 'Strawberries',
          quantitytype: 'weight',
          pricePer: 2.99,
          quantity: 10
        }]
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
    const currentOrderId = this.props.match.params.id
    console.log('render test order id ', currentOrderId)
    const currentOrder = this.state.orders.find(order => {
      console.log('inside map', order, currentOrderId)
      return order.orderId === currentOrderId})
    console.log('render test order ', currentOrder)
    const OrderDetails = currentOrder &&
      <OrderDetailsPage order={this.currentOrder}/>

    return (
      <div>
        {OrderDetails}
      </div>
    )
  }
}
