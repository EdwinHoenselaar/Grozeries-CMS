import React from 'react'
import { Link } from 'react-router-dom'

export default function OrdersPage(props) {
  return (
    props.orders.map(order => {
      return (
        <Link to={`/orders/${order.orderId}`}>
          <div className='orders-individual'>
            <h5 className='orders-individual-text'>{order.orderId}</h5>
            <h5 className='orders-individual-text'>{order.totalPrice}</h5>
            <h5 className='orders-individual-text'>{order.customer}</h5>
          </div>
        </Link>
      )
    })
  )
}
