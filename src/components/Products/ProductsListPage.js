import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
  return (
    <div className='product page'>
      {
        props.products.map(product => {
          return (
            <Link to={`/products/${product.id}`}>
              <div key={product.id} >
                <h4>{product.product_name}</h4>
                <h4>{product.description}</h4>
                <h4>{product.price}</h4>
                <h4>{product.ingredients}</h4>
                <h4>{product.allergens}</h4>
                <h4>{product.prices_by}</h4>
                <h4>{product.quantity}</h4>
                <h4>{product.in_stock}</h4>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
