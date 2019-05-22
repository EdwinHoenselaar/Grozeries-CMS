import React from 'react'
import { Heading } from 'evergreen-ui/commonjs/typography';
import { Text, Pane } from 'evergreen-ui';

export default function ShopDetailPage(props) {
  console.log('props test ',props)
  return (
    <>
      <Heading size={900}>{props.shop.shop_name}</Heading>
      <img src={props.shop.shop_image} alt="shop" className="shop-image"/>
      <Text size={600}>Adres:</Text>
      <Text size={600}>{props.shop.street_name} {props.shop.house_number}</Text>
      <Text size={600}>{props.shop.zipcode} {props.shop.city}</Text>
      <Text size={600}>Tel: {props.shop.phonenumber}</Text>
      <Text size={600}>Opening hours:</Text>
      <Text size={600}>{props.shop.business_hours}</Text>
    </>
  )
}
