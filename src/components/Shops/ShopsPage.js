import React from 'react'

export default function StorePage(props) {
  return (
    <>
      {
        props.shops.map(shop => {
          return (
            <div className='product-individual' key={shop.id} >
              <h5 className='product-individual-text'>{shop.shop_name}</h5>
              <h5 className='product-individual-text'>{shop.street_name}</h5>
              <h5 className='product-individual-text'>{shop.house_number}</h5>
              <h5 className='product-individual-text'>{shop.zipcode}</h5>
              <h5 className='product-individual-text'>{shop.city}</h5>
              <h5 className='product-individual-text'>{shop.email}</h5>
              <h5 className='product-individual-text'>{shop.phonenumber}</h5>
            </div>
          )
        })
      }
    </>
  )
}
