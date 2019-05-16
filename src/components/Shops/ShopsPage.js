import React from 'react'

export default function StorePage(props) {
  return (
    <div className='store page'>
      {
        props.shops.map(shop => {
          return (
            <div key={shop.id} >
              <h4>{shop.shop_name}</h4>
              <h4>{shop.street_name}</h4>
              <h4>{shop.house_number}</h4>
              <h4>{shop.zipcode}</h4>
              <h4>{shop.city}</h4>
              <h4>{shop.email}</h4>
              <h4>{shop.phonenumber}</h4>
            </div>
          )
        })
      }
    </div>
  )
}
