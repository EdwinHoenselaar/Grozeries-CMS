import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
  return (
    <>
      {
        props.products.map(product => {
          return (
            <Link to={`/products/${product.id}`}>
              <div className='product-individual' key={product.id} >
                <h5 className='product-individual-text'>{product.product_name}</h5>
                <h5 className='product-individual-text'>{product.description}</h5>
                <h5 className='product-individual-text'>{product.price}</h5>
                <h5 className='product-individual-text'>{product.ingredients}</h5>
                <h5 className='product-individual-text'>{product.allergens}</h5>
                <h5 className='product-individual-text'>{product.prices_by}</h5>
                <h5 className='product-individual-text'>{product.quantity}</h5>
                <h5 className='product-individual-text'>{product.in_stock}</h5>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}
