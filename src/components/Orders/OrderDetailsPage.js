import React from 'react'

export default function OrderDetailsPage(props) {
  console.log(props)
  return (
    <div className='orders-individual'>
    <h5 className='orders-individual-text'>{props.order.orderId}</h5>
    <h5 className='orders-individual-text'>{props.order.totalPrice}</h5>
    <h5 className='orders-individual-text'>{props.order.customer}</h5>
  </div>
  )
}
